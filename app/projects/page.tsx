import ProjectsList from "../_components/ProjectsList";

const page = () => {
  return (
    <div className="container mx-auto px-2 pb-10">
      <div className=" my-10">
        <h1 className="text-2xl md:text-3xl brightness ">Projects</h1>
        <p className="text-base md:text-lg">A list of projects I&apos;ve worked on</p>
      </div>
      <ProjectsList />
    </div>
  );
};

export default page;
