import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicFileExists(path: string | undefined | null): path is string {
  if (!path || !path.startsWith("/")) return false;
  const relative = decodeURI(path.split(/[?#]/)[0] ?? "");
  return existsSync(join(process.cwd(), "public", relative));
}

export function isPresent(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
