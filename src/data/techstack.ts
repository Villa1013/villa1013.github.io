export interface TechCategory {
  en: { title: string };
  es: { title: string };
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    en: { title: "Frontend" },
    es: { title: "Frontend" },
    items: ["React", "Astro", "Angular (beta→v16 · 6 años)", "TypeScript · JavaScript", "HTML5 · CSS · Tailwind", "Lit · Ionic", "React Native"],
  },
  {
    en: { title: "Architecture & Infra" },
    es: { title: "Arquitectura & Infra" },
    items: ["Microfrontend", "Monorepo", "PWA · Service Workers", "GraphQL · REST", "Node · Express", "Cypress · Playwright", "Webpack · Vite"],
  },
  {
    en: { title: "AI" },
    es: { title: "IA" },
    items: ["Claude Code", "Codex", "Gemini", "Copilot", "Open Code"],
  },
  {
    en: { title: "Animation" },
    es: { title: "Animación" },
    items: ["GSAP", "Motion", "CSS Animations", "Web Animations API", "Micro-interactions"],
  },
  {
    en: { title: "UX/UI Design" },
    es: { title: "UX/UI Design" },
    items: ["Figma", "Design Systems", "Atomic Design", "Wireframing · Prototyping", "User Flows · Information Architecture", "Accessibility (WCAG)", "Design Tokens"],
  },
];
