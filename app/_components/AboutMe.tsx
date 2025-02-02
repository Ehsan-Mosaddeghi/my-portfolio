import { Globe } from "@/components/ui/globe";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Marquee } from "@/components/ui/marquee";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Contact from "./Contact";

const slugs = ["typescript", "javascript", "html5", "css3", "vue.js", "nuxt", "react", "Next.js", "tailwindcss"];

const AboutMe = () => {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="container mx-auto  px-4 py-16 ">
      <h2 className="text-xl">About me</h2>
      <div className="grid md:grid-cols-4 gap-4 justify-items-center">
        <div className="relative flex size-full col-span-2 max-w-lg  overflow-hidden rounded-lg border bg-background pt-4 pl-4 pb-40 md:pb-60 ">
          <span className="pointer-events-none flex items-center gap-1 text-lg  leading-none">
            <MapPin /> Iran - Tabriz
          </span>
          <Globe className="top-8" />
          <div className="pointer-events-none absolute inset-0 h-full" />
        </div>
        <Contact />
        <Marquee pauseOnHover className="[--duration:20s] col-span-2">
          {images.map((image) => (
            <Image key={image} src={`${image}.svg`} width={50} height={50} alt="asd" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutMe;
