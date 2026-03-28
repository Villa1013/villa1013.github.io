/**
 * Genera componentes .astro desde src/raw/portfolio-body.html (uso puntual).
 * Ejecutar: node scripts/split-portfolio-html.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "src/raw/portfolio-body.html");
const outDir = path.join(root, "src/components/portfolio");

const lines = fs.readFileSync(srcPath, "utf8").split(/\r?\n/);

function sliceLines(start1, end1) {
  return lines.slice(start1 - 1, end1).join("\n");
}

function dedent(block) {
  const ls = block.split("\n");
  const nonempty = ls.filter((l) => l.trim().length > 0);
  if (nonempty.length === 0) return block;
  let min = Infinity;
  for (const l of nonempty) {
    const m = l.match(/^(\s*)/);
    if (m) min = Math.min(min, m[1].length);
  }
  if (!Number.isFinite(min) || min === 0) return block;
  return ls.map((l) => (l.length ? l.slice(min) : l)).join("\n");
}

function write(name, start1, end1) {
  const body = dedent(sliceLines(start1, end1));
  const astro = `---\n---\n\n${body}\n`;
  fs.writeFileSync(path.join(outDir, name), astro, "utf8");
}

fs.mkdirSync(outDir, { recursive: true });

// Rangos 1-based según portfolio-body.html
write("BodyOverlay.astro", 3, 5);
write("MobileNav.astro", 7, 101);
write("RightNav.astro", 145, 196);
write("LeftSidebar.astro", 198, 240);
write("SectionHero.astro", 245, 288);
write("SectionExperience.astro", 291, 327);
write("SectionWorks.astro", 328, 407);
write("SectionServices.astro", 408, 509);
write("SectionAbout.astro", 510, 585);
write("SectionTechStack.astro", 586, 646);
write("SectionTestimonial.astro", 647, 728);
write("SectionPartners.astro", 729, 771);
write("SectionProcess.astro", 772, 842);
write("SectionAwards.astro", 843, 875);
write("SectionPricing.astro", 876, 952);
write("SectionFaqs.astro", 953, 1024);
write("SectionContact.astro", 1025, 1064);
write("SiteFooter.astro", 1071, 1125);

console.log("Wrote components to", outDir);
