import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm  opacity-75 hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>
      </div>

      <section className="container mx-auto px-4 pt-12 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/30 text-primary text-xs font-medium border border-blue-500/20">
                {project.type}
              </span>
              {project.duration && (
                <span className="flex items-center gap-1.5 text-sm">
                  <Calendar size={14} />
                  {project.duration}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
              {project.title}
            </h1>

            <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <p className="opacity-60 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg transition-all hover:scale-105 will-change-transform "
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
                  className="inline-flex items-center  gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg border border-neutral-700 transition-all hover:scale-105 will-change-transform"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[55%] shrink-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Key Features & Highlights
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border hover:-translate-y-1 hover:shadow-md transition-all will-change-transform "
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold  mb-10">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-secondary border border-border group hover:-translate-y-1 hover:shadow-md transition-all will-change-transform"
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag size={14} className="text-primary" />
                <h3 className="font-semibold  group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
              </div>
              {tech.description && (
                <p className="text-sm opacity-75">{tech.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {project.challenges.length > 0 && (
        <section className="container mx-auto px-4 pb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Challenges & Solutions
          </h2>
          <div className="flex flex-col gap-6">
            {project.challenges.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-secondary border border-border rounded-xl"
              >
                <div>
                  <h3 className="text-sm font-medium text-error uppercase tracking-wider mb-3">
                    Problem
                  </h3>
                  <p className=" leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-success uppercase tracking-wider mb-3">
                    Solution
                  </h3>
                  <p className=" leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
