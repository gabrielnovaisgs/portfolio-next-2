export interface Tech {
  name: string;
  /** Path relative to /public, e.g. "/images/stack/react.svg" */
  icon: string;
  /** Brand color used for per-chip glow on hover */
  color: string;
  /** True for black SVGs (no fill) that need invert in dark mode */
  invertOnDark?: boolean;
}

export interface TechCategory {
  id: string;
  label: string;
  techs: Tech[];
}

export const STACK: TechCategory[] = [
  {
    id: "languages",
    label: "Linguagens",
    techs: [
      { name: "JavaScript", icon: "/images/stack/js.svg", color: "#F7DF1E" },
      { name: "TypeScript", icon: "/images/stack/typescript.svg", color: "#3178C6" },
      { name: "Python", icon: "/images/stack/python.svg", color: "#3776AB" },
      { name: "PHP", icon: "/images/stack/php.svg", color: "#777BB4" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    techs: [
      { name: "React", icon: "/images/stack/react.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/images/stack/nextjs.svg", color: "#888888", invertOnDark: true },
      { name: "Svelte", icon: "/images/stack/svelte.svg", color: "#FF3E00" },
      { name: "Figma", icon: "/images/stack/figma.svg", color: "#F24E1E" },
      { name: "Tailwind CSS", icon: "/images/stack/tailwind.svg", color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    techs: [
      { name: "Express", icon: "/images/stack/express.svg", color: "#888888", invertOnDark: true },
      { name: "MySQL", icon: "/images/stack/mysql.svg", color: "#4479A1" },
      { name: "PostgreSQL", icon: "/images/stack/postgresql.svg", color: "#4169E1" },
      { name: "Firebase", icon: "/images/stack/firebase.svg", color: "#FFCA28" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    techs: [
      { name: "Docker", icon: "/images/stack/docker.svg", color: "#2496ED" },
      { name: "GitHub Actions", icon: "/images/stack/actions.svg", color: "#2088FF" },
      { name: "Nginx", icon: "/images/stack/nginx.svg", color: "#009639" },
      { name: "Oracle Cloud", icon: "/images/stack/oracle.svg", color: "#F80000" },
      { name: "Ansible", icon: "/images/stack/ansible.svg", color: "#EE0000" },
    ],
  },
];
