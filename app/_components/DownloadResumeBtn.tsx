import { Download } from "lucide-react";

const DownloadResumeBtn = () => {
  return (
    <button className="bg-blue-400 flex gap-2 items-center overflow-hidden  px-4 py-2 rounded-xl z-10 border-2 border-zinc-200 relative before:block before:absolute before:w-full before:h-full before:top-0 duration-200  before:-left-full before:bg-gradient-to-r before:from-transparent hover:shadow-xl before:via-slate-300 before:to-transparent before:transition-all before:duration-700 hover:before:left-full hover:text-gray-200 hover:bg-blue-500">
      <Download /> Download Resume
    </button>
  );
};

export default DownloadResumeBtn;
