import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Project {
  name: string;
  image: string;
  live: string;
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a
      href={project.live}
      target="_blank"
      className="relative w-full max-w-fit justify-center items-center group ring-1 ring-stone-400 dark:ring-stone-700 z-10 flex  flex-col p-2 rounded-lg bg-zinc-400 dark:bg-zinc-600 hover:shadow-lg"
    >
      <div className="flex  gap-1 ml-2 mb-2 ">
        <div className="w-2 h-2 rounded-full duration-300 transition-all bg-gray-600 dark:bg-gray-800 group-hover:bg-red-600"></div>
        <div className="w-2 h-2 rounded-full duration-500 transition-all bg-gray-600 dark:bg-gray-800 group-hover:bg-yellow-600"></div>
        <div className="w-2 h-2 rounded-full duration-700 transition-all bg-gray-600 dark:bg-gray-800 group-hover:bg-green-600"></div>
      </div>
      <div className="overflow-hidden rounded-md">
        <Image
          src={`/projects_${project.image}.png`}
          alt={project.name}
          width={370}
          height={250}
          loading="lazy"
          quality={80}
          className="rounded-md z-10 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="absolute text-slate-100 bottom-0 rounded-t-md duration-500  z-10 flex justify-between  items-center w-3/4 px-3 py-1 left-1/2 border border-stone-700 border-b-transparent -translate-x-1/2 backdrop-blur-md">
        <h3>{project.name}</h3>
        <ArrowRight size={18} className="group-hover:-rotate-90 transition-all duration-[450ms]" />
      </div>
    </a>
  );
};

export default ProjectItem;
