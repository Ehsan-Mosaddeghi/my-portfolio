import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

const Summary = () => {
  return (
    <ShineBorder
      className="col-span-2 p-2 space-y-2 bg-background text-center"
      color={["#1c69c5", "#1c69c5", "#1c69c5"]}
    >
      <p className="text-lg">
        Feel free to explore my portfolio or reach out to me directly. I&apos;m always open to{" "}
        <span className="text-primary font-semibold">new opportunities...</span>
      </p>

      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span> Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </ShineBorder>
  );
};

export default Summary;
