import { XMLParser } from "fast-xml-parser";

export type DiaryEntry = {
  title: string;
  year: string | null;
  rating: number | null;
  stars: string | null;
  liked: boolean;
  rewatch: boolean;
  watchedDate: string | null;
  watchedLabel: string | null;
  poster: string | null;
  link: string;
};

const FETCH_TIMEOUT_MS = 8000;
const USERNAME_PATTERN = /^[A-Za-z0-9_]{1,40}$/;

type RawItem = Record<string, unknown>;

function text(value: unknown): string {
  if (value === undefined || value === null) return "";
  if (typeof value === "object" && "#text" in (value as Record<string, unknown>)) {
    return String((value as Record<string, unknown>)["#text"] ?? "").trim();
  }
  return String(value).trim();
}

function decodeEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function starsFor(rating: number | null): string | null {
  if (rating === null || !Number.isFinite(rating) || rating <= 0) return null;
  const whole = Math.floor(rating);
  const half = rating - whole >= 0.5;
  return "★".repeat(whole) + (half ? "½" : "");
}

function formatWatched(iso: string): string | null {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function posterFrom(description: string): string | null {
  const match = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (!match?.[1]) return null;
  const src = decodeEntities(match[1]);
  return /^https:\/\//i.test(src) ? src : null;
}

function titleFallback(rawTitle: string): { title: string; year: string | null } {
  const match = rawTitle.match(/^(.*),\s*(\d{4})(?:\s*-\s*.*)?$/);
  if (match?.[1]) return { title: match[1].trim(), year: match[2] ?? null };
  return { title: rawTitle.replace(/\s*-\s*[★½]+\s*$/, "").trim(), year: null };
}

export function parseLetterboxdRss(xml: string, limit = 8): DiaryEntry[] {
  const parser = new XMLParser({
    ignoreAttributes: true,
    parseTagValue: false,
    trimValues: true,
    processEntities: true,
    htmlEntities: true,
  });
  const doc = parser.parse(xml) as { rss?: { channel?: { item?: RawItem | RawItem[] } } };
  const rawItems = doc.rss?.channel?.item;
  if (!rawItems) return [];
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];

  const entries: DiaryEntry[] = [];
  for (const item of items) {
    const filmTitle = text(item["letterboxd:filmTitle"]);
    if (!filmTitle) continue;
    const link = text(item["link"]);
    if (!/^https:\/\/letterboxd\.com\//i.test(link)) continue;

    const fallback = titleFallback(decodeEntities(text(item["title"])));
    const year = text(item["letterboxd:filmYear"]) || fallback.year;
    const ratingRaw = text(item["letterboxd:memberRating"]);
    const ratingNum = ratingRaw ? Number(ratingRaw) : NaN;
    const rating = Number.isFinite(ratingNum) && ratingNum > 0 ? ratingNum : null;
    const watchedDate = text(item["letterboxd:watchedDate"]) || null;

    entries.push({
      title: decodeEntities(filmTitle) || fallback.title,
      year: year || null,
      rating,
      stars: starsFor(rating),
      liked: text(item["letterboxd:memberLike"]).toLowerCase() === "yes",
      rewatch: text(item["letterboxd:rewatch"]).toLowerCase() === "yes",
      watchedDate,
      watchedLabel: watchedDate ? formatWatched(watchedDate) : null,
      poster: posterFrom(text(item["description"])),
      link,
    });
    if (entries.length >= limit) break;
  }
  return entries;
}

export function resolveLetterboxdUsername(configured: string): string {
  const fromEnv = process.env.LETTERBOXD_USERNAME;
  const candidate = (fromEnv !== undefined ? fromEnv : configured).trim();
  return USERNAME_PATTERN.test(candidate) ? candidate : "";
}

export async function fetchLetterboxdDiary(username: string, limit = 8): Promise<DiaryEntry[]> {
  if (!username) return [];
  const url = `https://letterboxd.com/${encodeURIComponent(username)}/rss/`;
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; macsmith21.github.io static build)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });
    if (!response.ok) {
      console.warn(`[letterboxd] ${url} returned ${response.status}, hiding Film section`);
      return [];
    }
    const entries = parseLetterboxdRss(await response.text(), limit);
    console.info(`[letterboxd] parsed ${entries.length} diary entries for ${username}`);
    return entries;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[letterboxd] fetch failed for ${username} (${reason}), hiding Film section`);
    return [];
  }
}
