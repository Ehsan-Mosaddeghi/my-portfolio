export interface Project {
  id: string;
  title: string;
  type: "Personal Project" | "Client Work" | "Freelance" | "Open Source";
  description: string;
  longDescription: string;
  role: string;
  duration?: string;
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  techStack: { name: string; description?: string }[];
  highlights: string[];
  challenges: { problem: string; solution: string }[];
}

export const projects: Project[] = [
  {
    id: "vaultly",
    title: "Vaultly",
    type: "Personal Project",
    description:
      "A full-stack personal finance tracker with real-time analytics, multi-wallet support, and interactive data visualizations.",
    longDescription:
      "Vaultly was built to solve a real problem I faced: tracking finances across multiple accounts without relying on spreadsheets. The goal was a clean, fast, and secure web app providing instant insights into spending habits while keeping user data private through secure authentication and database design.",
    role: "Sole Developer — Full-stack design, development, and deployment",
    duration: "3 months",
    liveUrl: "https://vaultly-tracker.vercel.app",
    repoUrl: "https://github.com/Ehsan-Mosaddeghi/finance-tracker",
    image: "/projects_vaultly.png",
    techStack: [
      { name: "Nuxt 3", description: "SSR & SSG for performance" },
      { name: "Vue 3", description: "Composition API for reusable logic" },
      { name: "TypeScript", description: "Type-safe across the stack" },
      { name: "Tailwind CSS", description: "Utility-first responsive styling" },
      { name: "Supabase", description: "Auth, real-time DB, RLS" },
      { name: "PostgreSQL", description: "Relational data & complex queries" },
      { name: "Recharts", description: "Interactive financial charts" },
      { name: "Pinia", description: "State management" },
    ],
    highlights: [
      "Full-stack architecture with Nuxt 3 and TypeScript for type-safe, maintainable code",
      "Secure authentication and PostgreSQL persistence via Supabase with row-level security",
      "Interactive financial charts and spending analytics using Recharts with full dark mode support",
      "Multi-wallet system for organizing transactions across personal, savings, and business accounts",
    ],
    challenges: [
      {
        problem:
          "Complex queries across multiple wallets and time ranges slowed the dashboard.",
        solution:
          "Optimized PostgreSQL views and used Supabase realtime subscriptions to cache and sync metrics efficiently.",
      },
      {
        problem:
          "Chart performance degraded with 6+ months of transaction history.",
        solution:
          "Added data aggregation layers and virtualized rendering with Recharts, reducing render time by ~60%.",
      },
    ],
  },
  {
    id: "raceroms",
    title: "Raceroms",
    type: "Client Work",
    description:
      "A commercial, multi-language website for an ECU tuning company, built from Figma into a responsive, SEO-optimized production site.",
    longDescription:
      "Raceroms is a Greece-based ECU tuning company serving English and Greek markets. I collaborated with a UI/UX designer to translate Figma designs into production-ready pages, integrated backend APIs for dynamic content, and implemented technical SEO to improve organic visibility for high-intent service pages.",
    role: "Frontend Developer — UI implementation, API integration, SEO",
    liveUrl: "https://raceroms.com/en",
    image: "/projects_raceroms.png",
    techStack: [
      { name: "Nuxt 3", description: "SSR for SEO and performance" },
      { name: "Vue 3", description: "Component-based architecture" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "Tailwind CSS", description: "Pixel-perfect responsive styling" },
      { name: "Shadcn", description: "Accessible UI component primitives" },
      { name: "Axios", description: "HTTP client for API communication" },
      { name: "i18n", description: "English & Greek localization" },
    ],
    highlights: [
      "Translated complex Figma designs into responsive, production-ready pages using Nuxt 3, Tailwind CSS, and Shadcn components",
      "Built robust API integration with Axios for dynamic data fetching, form submissions, and server-side validation",
      "Implemented on-page SEO strategies to improve organic search visibility across multiple languages",
    ],
    challenges: [
      {
        problem:
          "Figma designs used specific spacing and typography that needed to scale perfectly across all breakpoints.",
        solution:
          "Created a custom Tailwind config extending the design system tokens, ensuring 1:1 fidelity from mobile to desktop.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}
