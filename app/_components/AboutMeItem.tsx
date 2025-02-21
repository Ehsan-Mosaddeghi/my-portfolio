const AboutMeItem = ({ title, children }: { title: string; children: string }) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <p className="text-sm md:text-base">{children}</p>
      </div>
      <div className="block w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm rounded-full last:hidden"></div>
    </>
  );
};

export default AboutMeItem;
