import { isExternal, isPresent, publicFileExists } from "./assets";

export type LinkRow = {
  label: string;
  detail: string;
  href: string;
  external: boolean;
};

export function localLink(path: string): string | null {
  if (!isPresent(path)) return null;
  if (isExternal(path)) return path;
  return publicFileExists(path) ? path : null;
}

export function present(value: string): string | null {
  return isPresent(value) ? value : null;
}

export function prettyHost(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "");
    return `${parsed.hostname.replace(/^www\./, "")}${path}`;
  } catch {
    return url;
  }
}

export function row(label: string, href: string | null, detail?: string): LinkRow | null {
  if (!href) return null;
  return { label, href, detail: detail ?? prettyHost(href), external: isExternal(href) };
}

export function compactRows(items: Array<LinkRow | null>): LinkRow[] {
  return items.filter((item): item is LinkRow => item !== null);
}
