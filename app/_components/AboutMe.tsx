import Contact from "./Contact";
import Skills from "./Skills";
import Location from "./Location";
import Summary from "./Summary";
import { BlurFade } from "@/components/ui/blur-fade";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold my-10">About me</h2>
      <BlurFade className="grid md:grid-cols-4 gap-5" delay={0.2} duration={0.5} direction="up">
        <Location />
        <Contact />
        <Summary />
        <Skills />
      </BlurFade>
    </div>
  );
};

export default AboutMe;
