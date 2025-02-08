import { Globe } from "@/components/ui/globe";
import { ShineBorder } from "@/components/ui/shine-border";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <ShineBorder
      className="relative flex size-full col-span-2 max-w-lg  overflow-hidden rounded-lg border bg-background pl-3 pb-40 md:pb-60 "
      color={["#1c69c5", "#1c69c5", "#1c69c5"]}
    >
      <span className="pointer-events-none flex items-center gap-2 text-lg  leading-none">
        <MapPin /> Iran - Tabriz
      </span>
      <Globe className="top-8" />
      <div className="pointer-events-none absolute inset-0 h-full" />
    </ShineBorder>
  );
};

export default Location;
