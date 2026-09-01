import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: "vaultly",
    title: "Vaultly",
    description:
      "A full-stack personal finance tracker that helps users manage income, expenses, and multiple wallets through an intuitive dashboard with real-time analytics. Built to explore modern Vue architecture, secure authentication flows, and scalable database design with a focus on clean UI and user experience.",

    techStack: [
      "Nuxt 4",
      "TypeScript",
      "Tailwind CSS",
      "Nuxt UI",
      "Nuxt Charts",
      "Pinia",
      "Supabase",
      "Valibot",
    ],
    image: "/projects_vaultly.png",
    liveUrl: "https://vaultly-tracker.vercel.app",
    repoUrl: "https://github.com/Ehsan-Mosaddeghi/Vaultly",
  },
  {
    id: "raceroms",
    title: "Raceroms",
    description:
      "A commercial, multi-language website for an ECU tuning and chip remapping company, built from Figma designs into a responsive, SEO-optimized production site. Features a vehicle performance lookup, product catalog, and integrated contact forms serving both English and Greek markets.",

    techStack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Axios",
      "i18n",
    ],
    image: "/projects_raceroms.png",
    liveUrl: "https://raceroms.com/",
  },
];

const FeaturedProjects = () => {
  return (
    <div
      id="featured-projects"
      className="container mx-auto px-4 py-20 md:pt-28 md:pb-14"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold ">Featured Projects</h2>

        <Link
          href="/projects"
          className="group inline-flex items-center gap-2  hover:text-primary transition-colors text-sm font-medium"
        >
          View all projects
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <BlurFade
              direction="up"
              duration={0.5}
              delay={0.2}
              inView
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div
                className={`flex flex-col gap-6 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="opacity-60 line-clamp-3 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg 
             transition-transform  
             hover:scale-105 will-change-transform"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary border-border border text-sm font-medium rounded-lg 
             transition-transform  
             hover:scale-105 will-change-transform"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary border-border border text-sm font-medium rounded-lg 
             transition-transform  
             hover:scale-105 will-change-transform"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div
                className={`relative ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl  shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Link>

                <div
                  className={`absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${
                    isReversed ? "right-0" : "left-0"
                  }`}
                />
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProjects;
