import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://macsmith21.github.io",
  output: "static",
  trailingSlash: "ignore",
  devToolbar: {
    enabled: false,
  },
  build: {
    format: "directory",
  },
});
