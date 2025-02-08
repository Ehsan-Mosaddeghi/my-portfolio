"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { ShineBorder } from "@/components/ui/shine-border";
import { CodeXml } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <ShineBorder className="col-span-2 border rounded-lg bg-background" color={["#1c69c5", "#1c69c5", "#1c69c5"]}>
      <p className="flex items-center gap-2 text-lg py-2 pl-4 w-full">
        <CodeXml /> Skills I have
      </p>
      <Marquee pauseOnHover className="relative w-full py-2  last:[--duration:20s]">
        {slugs.map((slug) => (
          <span key={slug.image} className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={`https://cdn.simpleicons.org/${slug.image}/${slug.image}.svg`}
                    width={40}
                    height={40}
                    alt={slug.toolTip}
                    className="cursor-pointer hover:-translate-y-1 duration-200"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{slug.toolTip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        ))}
      </Marquee>
    </ShineBorder>
  );
};

export default Skills;
