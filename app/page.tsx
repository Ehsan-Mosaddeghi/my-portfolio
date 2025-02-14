import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Hero from "./_components/Hero";
import AboutMe from "./_components/AboutMe";

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-background ">
        <Hero />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
          )}
        />
      </div>

      <AboutMe />
    </>
  );
}
