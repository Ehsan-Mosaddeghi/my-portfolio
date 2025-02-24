"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { CodeXml } from "lucide-react";

const slugs = [
  { image: "typescript", toolTip: "Typescript", link: "https://www.typescriptlang.org/" },
  { image: "javascript", toolTip: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { image: "html5", toolTip: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { image: "css3", toolTip: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { image: "vue.js", toolTip: "Vue", link: "https://vuejs.org/" },
  { image: "nuxt", toolTip: "Nuxt", link: "https://nuxtjs.org/" },
  { image: "react", toolTip: "React", link: "https://reactjs.org/" },
  { image: "next.js", toolTip: "Next.js", link: "https://nextjs.org/" },
  { image: "tailwindcss", toolTip: "TailwindCSS", link: "https://tailwindcss.com/" },
];

const Skills = () => {
  return (
    <div className="col-span-2 border border-border rounded-lg bg-background overflow-hidden w-full">
      <p className="flex items-center gap-2 text-lg py-2 pl-4 w-full -z-10">
        <CodeXml /> Skills I have
      </p>
      <Marquee pauseOnHover className="relative w-full py-2  last:[--duration:20s]">
        {slugs.map((slug) => (
          <a target="blink" href={slug.link} key={slug.image} className="relative">
            <Image
              src={`https://cdn.simpleicons.org/${slug.image}/${slug.image}.svg`}
              width={40}
              height={40}
              alt={slug.toolTip}
              className="cursor-pointer hover:-translate-y-1 duration-200 peer "
            />
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex 
            px-3 py-2 text-sm text-text bg-transparent backdrop-blur-md border border-border rounded-md shadow-lg
            transition-opacity duration-300 opacity-0 peer-hover:opacity-100"
            >
              {slug.toolTip}
            </span>
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
