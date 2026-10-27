import { siApplemusic, siInstagram, siLetterboxd, siSpotify } from "simple-icons";

const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export type SocialKey = "letterboxd" | "spotify" | "appleMusic" | "linkedin" | "instagram";

export const socialIcons: Record<SocialKey, { label: string; path: string; brand: string }> = {
  letterboxd: { label: "Letterboxd", path: siLetterboxd.path, brand: `#${siLetterboxd.hex}` },
  spotify: { label: "Spotify", path: siSpotify.path, brand: `#${siSpotify.hex}` },
  appleMusic: { label: "Apple Music", path: siApplemusic.path, brand: `#${siApplemusic.hex}` },
  linkedin: { label: "LinkedIn", path: linkedinPath, brand: "#0A66C2" },
  instagram: { label: "Instagram", path: siInstagram.path, brand: `#${siInstagram.hex}` },
};

export const socialOrder: SocialKey[] = ["letterboxd", "spotify", "appleMusic", "linkedin", "instagram"];
