const loading = () => {
  return (
    <div className="w-full h-[calc(100svh-100px)] flex justify-center absolute items-center backdrop-blur-sm">
      <div className="w-24 h-24 rounded-full animate-spin flex justify-center items-center bg-gradient-to-t from-white to-primary">
        <div className="w-[90%] h-[90%] bg-secondary dark:bg-secondary rounded-full"></div>
      </div>
    </div>
  );
};

export default loading;
