import Contact from "./Contact";
import Skills from "./Skills";
import Location from "./Location";
import Summary from "./Summary";

const AboutMe = () => {
  return (
    <div className="container mx-auto  px-4 py-16 ">
      {/* <h2 className="text-xl">About me</h2> */}
      <div className="grid md:grid-cols-4 gap-4 justify-items-center">
        <Location />
        <Contact />
        <Skills />
        <Summary />
      </div>
    </div>
  );
};

export default AboutMe;
