'use client'

import DownloadResumeBtn from "@/app/_components/DownloadResumeBtn";
import { BlurFade } from "@/components/ui/blur-fade";
import { useEffect, useState } from "react";



const Hero = () => {
  const [age, setAge] = useState<number>(20);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);

    setAge(currentYear - 2005);
  }, [setAge]);

  return (
    <BlurFade
      className="flex flex-col items-center text-center py-36 md:py-52 z-10 gap-5 px-4"
      duration={0.6}
      direction="up"
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow ">Ehsan Mosaddeghi</h1>
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow">Front-End Developer</h1>
      <p className="opacity-60 text-lg max-w-xl text-center">
        {age}-year-old self-taught frontend developer with a passion for learning and crafting innovative user experiences.
        Enthusiastic about growth and eager to explore new technologies.
      </p>
      <DownloadResumeBtn />
    </BlurFade>
  );
};

export default Hero;
