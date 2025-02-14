"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { CodeXml } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const slugs = [
  { image: "typescript", toolTip: "Typescript" },
  { image: "javascript", toolTip: "Javascript" },
  { image: "html5", toolTip: "HTML" },
  { image: "css3", toolTip: "CSS" },
  { image: "vue.js", toolTip: "Vue" },
  { image: "nuxt", toolTip: "Nuxt" },
  { image: "react", toolTip: "React" },
  { image: "next.js", toolTip: "Next.js" },
  { image: "tailwindcss", toolTip: "TailwindCSS" },
];

const Skills = () => {
  return (
    <div className="col-span-2 border border-border rounded-lg bg-background overflow-hidden w-full">
      <p className="flex items-center gap-2 text-lg py-2 pl-4 w-full -z-10">
        <CodeXml /> Skills I have
      </p>
      <Marquee pauseOnHover className="relative w-full py-2  last:[--duration:20s]">
        {slugs.map((slug) => (
          <span key={slug.image} className="relative">
            <Image
              src={`https://cdn.simpleicons.org/${slug.image}/${slug.image}.svg`}
              width={40}
              height={40}
              alt={slug.toolTip}
              className="cursor-pointer hover:-translate-y-1 duration-200 peer "
            />
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex 
            px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg
            transition-opacity duration-300 opacity-0 peer-hover:opacity-100"
            >
              {slug.toolTip}
              <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
