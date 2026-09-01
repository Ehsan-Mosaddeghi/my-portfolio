const ProjectBadge = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div
      className={`rounded-full w-fit px-2 text-xs py-1 ${bgColor ? bgColor : "bg-secondary"}`}
    >
      Nuxt
    </div>
  );
};

export default ProjectBadge;
