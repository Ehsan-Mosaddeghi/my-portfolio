import React from "react";
import ProjectItem from "./ProjectItem";
import { BlurFade } from "@/components/ui/blur-fade";

interface Project {
  name: string;
  image: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "Weather website",
    image: "weather",
    live: "https://weather-w.vercel.app/",
  },
  {
    name: "The Wild Oasis",
    image: "wild_oasis_user",
    live: "https://the-wild-oasis-user-ten.vercel.app/",
  },
  {
    name: "Wild Oasis Dashboard",
    image: "wild_oasis_dashboard",
    live: "https://the-wild-oasis-omega-sepia.vercel.app/",
  },
  {
    name: "React Quiz",
    image: "react_quiz",
    live: "https://react-quiz-ehsan.vercel.app/",
  },
];

const ProjectsList = () => {
  return (
    <BlurFade
      className=" grid md:grid-cols-2 justify-items-center gap-8 mx-8 md:mx-10 lg:mx-20"
      delay={0.25}
      duration={0.6}
      direction="up"
    >
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </BlurFade>
  );
};

export default ProjectsList;
