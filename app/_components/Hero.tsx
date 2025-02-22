import DownloadResumeBtn from "@/app/_components/DownloadResumeBtn";
import { BlurFade } from "@/components/ui/blur-fade";

const Hero = () => {
  return (
    <BlurFade
      className="flex flex-col items-center text-center py-36 md:py-52 z-10 gap-5 px-4"
      duration={0.6}
      direction="up"
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow ">Ehsan Mosaddeghi</h1>
      <h1 className="text-4xl md:text-6xl font-semibold text-shadow">Front-End Developer</h1>
      <p className="opacity-60 text-lg max-w-xl text-center">
        19-year-old self-taught frontend developer with a passion for learning and crafting innovative user experiences.
        Enthusiastic about growth and eager to explore new technologies.
      </p>
      <DownloadResumeBtn />
    </BlurFade>
  );
};

export default Hero;
