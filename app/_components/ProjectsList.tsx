"use client";

import React from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ filter: "blur(6px)", opacity: 0 }}
      animate={{ filter: "blur(0)", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=" grid md:grid-cols-2 justify-items-center gap-4 mx-8 md:mx-10 lg:mx-20"
    >
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
