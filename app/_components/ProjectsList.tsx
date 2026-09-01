import React from "react";
import ProjectItem from "./ProjectItem";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/data/projects";

const ProjectsList = () => {
  return (
    <BlurFade
      className=" grid md:grid-cols-2 justify-items-center gap-8 mx-8 md:mx-10 lg:mx-20"
      delay={0.25}
      duration={0.2}
      direction="up"
    >
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </BlurFade>
  );
};

export default ProjectsList;
