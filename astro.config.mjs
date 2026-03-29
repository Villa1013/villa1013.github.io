import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// If you deploy to GitHub Pages at username.github.io/Portfolio, set:
// base: "/Portfolio",
export default defineConfig({
  site: "https://villa1013.github.io",
  base: "/",
  compressHTML: true,
  integrations: [sitemap()],
});
