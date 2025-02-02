"use client";

import DownloadResumeBtn from "@/app/_components/DownloadResumeBtn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: 100, filter: "blur(6px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0)", opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center py-52 z-10 gap-5"
    >
      <h1 className="text-6xl font-semibold">Ehsan Mosaddeghi</h1>
      <h1 className="text-6xl font-semibold">Front-End Developer</h1>
      <p className="opacity-60 max-w-xl text-center">
        19 years old self-taught frontend developer passionate about learning and creating innovative user experiences.
        Eager to grow and explore new technologies.
      </p>
      <DownloadResumeBtn />
    </motion.div>
  );
};

export default Hero;
