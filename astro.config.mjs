import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Si publicas en GitHub Pages como usuario.github.io/Portfolio, usa:
// base: "/Portfolio",
export default defineConfig({
  site: "https://villa1013.github.io",
  base: "/",
  compressHTML: true,
  integrations: [sitemap()],
});
