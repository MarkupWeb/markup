import Link from "next/link";
import React from "react";

const Baner = () => {
  return (
    <div className="bg-slate-800 dark:bg-white  py-10 lg:py-20 gap-8  shadow-xl text-center">
      <p className="pb-3 text-sm font-semibold text-white dark:text-dark">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span className="text-orange-400">Molestiae, sit.</span>
      </p>
      <h1 className=" text-center text-white dark:text-blue-950 text-[1.4rem] lg:text-[2.5rem] tracking-wide font-thin mb-5 ">
        LET’S START <span className=" font-medium">YOUR PROJECT</span>
      </h1>

      <Link
        href="https://wa.me/+201000936297"
        className=" flex items-center justify-center"
        target="_blank"
      >
        <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110  active:animate-bounce">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] "></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white hover:text-gray-300 backdrop-blur-3xl gap-2 undefined">
            Contact Us
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Baner;
