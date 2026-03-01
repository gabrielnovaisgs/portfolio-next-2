export interface Project {
  title: string;
  description: string;
  imgSrc: string;
  accessLink?: string;
  githubLink: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Positivus",
    imgSrc: "/images/sites/preview-landing-1-desktop.png",
    accessLink: "https://landing-page-positivus-chi.vercel.app/",
    githubLink: "https://github.com/gabrielnovaisgs/landing-page-positivus",
    description:
      "Agência de marketing digital especializada em SEO, anúncios pagos, redes sociais e criação de conteúdo. Estratégias personalizadas para resultados mensuráveis.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Efestos",
    imgSrc: "/images/sites/preview-landing-4-desktop.png",
    accessLink: "https://www.efestos.com.br/",
    githubLink: "https://github.com/gabrielnovaisgs/efestos",
    description:
      "Software house que ajuda empresas a crescerem online. Serviços de SEO, landing pages, e-commerce e muito mais.",
    tags: ["React", "Node.js"],
    featured: true,
  },
  {
    title: "Travelog",
    imgSrc: "/images/sites/preview-landing-2-desktop.png",
    accessLink: "https://landing-page-travel-sandy.vercel.app/",
    githubLink: "https://github.com/gabrielnovaisgs/travel-landing-page",
    description:
      "Agência de viagens com reserva facilitada para os melhores destinos do mundo, como Roma e as Maldivas. Promoções exclusivas e pacotes imperdíveis.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Logoipsum",
    imgSrc: "/images/sites/preview-landing-3-desktop.png",
    accessLink: "https://real-state-landing-page-mauve.vercel.app/",
    githubLink: "https://github.com/gabrielnovaisgs/real-state-landing-page",
    description:
      "Plataforma imobiliária moderna para imóveis residenciais e comerciais. Design intuitivo para encontrar o espaço dos seus sonhos com facilidade.",
    tags: ["React", "Tailwind CSS"],
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
