import { Globe } from "@/components/ui/globe";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="relative flex size-full col-span-2 max-w-lg overflow-hidden rounded-lg border border-border bg-background pl-4 pt-3 pb-40 md:pb-60 ">
      <span className="pointer-events-none flex items-center gap-2 text-lg  leading-none">
        <MapPin /> Iran - Tabriz
      </span>
      <Globe className="top-8" />
      <div className="pointer-events-none absolute inset-0 h-full" />
    </div>
  );
};

export default Location;
