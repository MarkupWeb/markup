import Link from "next/link";
import React from "react";

const Baner = () => {
  return (
    <div className="bg-slate-800 dark:bg-white flex flex-col justify-center py-10 lg:py-20 gap-8 rounded-md shadow-xl">
      <h1 className="container text-center text-white dark:text-blue-950 text-[1.4rem] lg:text-[2.5rem] tracking-wide font-thin  ">
        LET’S START{" "}
        <span className=" font-medium">YOUR PROJECT</span>
      </h1>

      <Link href="/" className="  flex items-center justify-center">
        <button className="bg-none border-[1px] text-sm lg:text-md border-blue-500  text-white dark:text-blue-950 px-8 py-3 rounded-3xl hover:bg-blue-500 dark:hover:text-white">
          CONECT US
        </button>
      </Link>
    </div>
  );
};

export default Baner;
