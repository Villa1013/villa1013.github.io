export interface TechCategory {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  image: string;
  en: {
    category: string;
    name: string;
    shortDesc: string;
    description: string;
    context: string;
    role: string;
    tech: string[];
    techCategories: TechCategory[];
  };
  es: {
    category: string;
    name: string;
    shortDesc: string;
    description: string;
    context: string;
    role: string;
    tech: string[];
    techCategories: TechCategory[];
  };
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "mundoterpel",
    image: "/asset/images/section/works-1.jpg",
    en: {
      category: "Platform Dev",
      name: "Rumbo Terpel",
      shortDesc:
        "Web platform for mobility service management and operations.",
      description:
        "Comprehensive web platform for the management and operation of mobility services, integrating real-time tracking tools, an administrative panel, and an optimized user experience. Built to handle high-traffic operations with scalable architecture.",
      context:
        "Terpel required a robust digital solution to manage their fleet operations across Colombia. The platform needed to handle real-time data, support thousands of concurrent users, and provide actionable insights for fleet managers.",
      role: "Frontend Developer",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      techCategories: [
        { label: "Framework", items: ["React", "TypeScript"] },
        { label: "Backend", items: ["Node.js", "Express"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "Architecture", items: ["Microfrontend", "REST"] },
      ],
    },
    es: {
      category: "Desarrollo de Plataforma",
      name: "Rumbo Terpel",
      shortDesc:
        "Plataforma web para la gestión y operación de servicios de movilidad.",
      description:
        "Plataforma web integral para la gestión y operación de servicios de movilidad, integrando herramientas de seguimiento en tiempo real, panel administrativo y experiencia de usuario optimizada. Construida para manejar operaciones de alto tráfico con arquitectura escalable.",
      context:
        "Terpel necesitaba una solución digital robusta para gestionar las operaciones de su flota en toda Colombia. La plataforma debía manejar datos en tiempo real, soportar miles de usuarios concurrentes y proporcionar información accionable para los gerentes de flota.",
      role: "Frontend Developer",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      techCategories: [
        { label: "Framework", items: ["React", "TypeScript"] },
        { label: "Backend", items: ["Node.js", "Express"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "Architecture", items: ["Microfrontend", "REST"] },
      ],
    },
  },
  {
    slug: "prolibu",
    image: "/asset/images/section/works-2.jpg",
    en: {
      category: "Website Dev",
      name: "Prolibu Tech",
      shortDesc:
        "Corporate website for a technology company with modern design.",
      description:
        "Corporate website for a technology company featuring a modern design, optimized performance, and a content management panel for digital services. Focused on fast load times, SEO best practices, and a clean visual identity.",
      context:
        "Prolibu needed a modern corporate presence to showcase their technology services and attract new clients. The site had to load fast, rank well on search engines, and be easy to update without developer intervention.",
      role: "Full Stack Developer",
      tech: ["Astro", "Tailwind CSS", "JavaScript"],
      techCategories: [
        { label: "Framework", items: ["Astro", "JavaScript"] },
        { label: "Styling", items: ["Tailwind CSS"] },
        { label: "Architecture", items: ["Static Site", "SEO"] },
      ],
    },
    es: {
      category: "Desarrollo Web",
      name: "Prolibu Tech",
      shortDesc:
        "Sitio web corporativo para empresa de tecnología con diseño moderno.",
      description:
        "Sitio web corporativo para empresa de tecnología con diseño moderno, rendimiento optimizado y panel de gestión de contenido para servicios digitales. Enfocado en tiempos de carga rápidos, mejores prácticas de SEO e identidad visual limpia.",
      context:
        "Prolibu necesitaba una presencia corporativa moderna para mostrar sus servicios tecnológicos y atraer nuevos clientes. El sitio debía cargar rápido, rankear bien en buscadores y ser fácil de actualizar sin intervención de desarrolladores.",
      role: "Full Stack Developer",
      tech: ["Astro", "Tailwind CSS", "JavaScript"],
      techCategories: [
        { label: "Framework", items: ["Astro", "JavaScript"] },
        { label: "Styling", items: ["Tailwind CSS"] },
        { label: "Architecture", items: ["Static Site", "SEO"] },
      ],
    },
    link: "https://prolibu.com/",
  },
  {
    slug: "x-direct",
    image: "/asset/images/section/works-3.jpg",
    en: {
      category: "Mobile App Design",
      name: "X-direct Mobile",
      shortDesc:
        "Mobile app UI design for a direct services platform.",
      description:
        "User interface design for a mobile application focused on direct services, with an emphasis on fluid experience, intuitive navigation, and a consistent design system. From wireframes to high-fidelity prototypes ready for development handoff.",
      context:
        "X-direct needed a mobile app design that could serve as a marketplace for on-demand services. The challenge was creating an intuitive experience that balanced speed of booking with comprehensive service information.",
      role: "Mobile Developer",
      tech: ["Figma", "React Native", "Expo"],
      techCategories: [
        { label: "Design", items: ["Figma", "Prototyping"] },
        { label: "Framework", items: ["React Native", "Expo"] },
        { label: "Platform", items: ["iOS", "Android"] },
      ],
    },
    es: {
      category: "Diseño de App Móvil",
      name: "X-direct Mobile",
      shortDesc:
        "Diseño de interfaz de usuario para aplicación móvil de servicios directos.",
      description:
        "Diseño de interfaz de usuario para aplicación móvil de servicios directos, con enfoque en experiencia fluida, navegación intuitiva y sistema de diseño consistente. Desde wireframes hasta prototipos de alta fidelidad listos para desarrollo.",
      context:
        "X-direct necesitaba el diseño de una aplicación móvil que sirviera como marketplace de servicios bajo demanda. El reto era crear una experiencia intuitiva que equilibrara la rapidez de reserva con información completa del servicio.",
      role: "Mobile Developer",
      tech: ["Figma", "React Native", "Expo"],
      techCategories: [
        { label: "Design", items: ["Figma", "Prototyping"] },
        { label: "Framework", items: ["React Native", "Expo"] },
        { label: "Platform", items: ["iOS", "Android"] },
      ],
    },
  },
  {
    slug: "uixdr-agency",
    image: "/asset/images/section/works-3.jpg",
    en: {
      category: "Website Design",
      name: "UIXDR Agency Website",
      shortDesc:
        "Agency website with impactful visual presentation and smooth animations.",
      description:
        "Design and development of a website for a user experience agency, featuring an impactful visual presentation, smooth animations, and a conversion-oriented structure. Built with performance and scroll-driven interactions in mind.",
      context:
        "UIXDR, a UX agency, needed a website that would demonstrate their design capabilities through the site itself. The goal was to create a memorable first impression while maintaining fast load times and accessibility.",
      role: "UI/UX Designer",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      techCategories: [
        { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
        { label: "Animation", items: ["GSAP", "ScrollTrigger", "CSS Animations"] },
        { label: "Performance", items: ["Lazy Loading", "Optimization"] },
      ],
    },
    es: {
      category: "Diseño Web",
      name: "UIXDR Agency Website",
      shortDesc:
        "Sitio web de agencia con presentación visual impactante y animaciones suaves.",
      description:
        "Diseño y desarrollo de sitio web para agencia de experiencia de usuario, con presentación visual impactante, animaciones suaves y estructura orientada a conversión. Construido con rendimiento e interacciones basadas en scroll.",
      context:
        "UIXDR, una agencia de UX, necesitaba un sitio web que demostrara sus capacidades de diseño a través del propio sitio. El objetivo era crear una primera impresión memorable manteniendo tiempos de carga rápidos y accesibilidad.",
      role: "UI/UX Designer",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      techCategories: [
        { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
        { label: "Animation", items: ["GSAP", "ScrollTrigger", "CSS Animations"] },
        { label: "Performance", items: ["Lazy Loading", "Optimization"] },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
