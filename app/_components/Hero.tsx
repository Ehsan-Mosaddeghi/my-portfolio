"use client";

import DownloadResumeBtn from "@/app/_components/DownloadResumeBtn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, filter: "blur(6px)", opacity: 0 }}
      animate={isInView ? { y: 0, filter: "blur(0)", opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center py-36 md:py-52 z-10 gap-5 px-4"
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow ">Ehsan Mosaddeghi</h1>
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow">Front-End Developer</h1>
      <p className="opacity-60 text-lg max-w-xl text-center">
        19-year-old self-taught frontend developer with a passion for learning and crafting innovative user experiences.
        Enthusiastic about growth and eager to explore new technologies.
      </p>
      <DownloadResumeBtn />
    </motion.div>
  );
};

export default Hero;
