import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="w-full h-[calc(100svh-100px)] flex flex-col gap-3 justify-center items-center text-center">
      <h1 className="text-9xl text-pretty text-primary text- font-black brightness ">Oops!</h1>
      <h3 className="text-xl">404 - PAGE NOT FOUND</h3>
      <p className="max-w-[30rem] text-lg text-gray-500">
        the page you are looking for might have been removed had its name changed or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="py-2 px-4 bg-blue-400 rounded-xl border-solid border-2 border-blue-600 shadow-xl hover:-translate-y-1 duration-300 hover:bg-blue-300"
      >
        GO TO HOME PAGE
      </Link>
    </div>
  );
};

export default notFound;
