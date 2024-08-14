"use client";

import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import Image from "next/image";

interface faqdata {
  heading: string;
  subheading: string;
}

const Atchievements = () => {
  return (
    <>
      <div className="pb-10">
        

          <div className="mx-auto max-w-screen-xl  sm:px-6 md:py-0 ">
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-9 sm:grid-cols-2  content-center items-center sm:divide-x sm:divide-gray-100 dark:sm:divide-gray-800">

                <div className="flex flex-col gap-5">
                <div className="flex flex-col px-3 py-6 text-center bg-blue-400 shadow-lg rounded-md">
                  <dt className="order-last text-lg font-medium text-gray-100 dark:text-gray-400">
                    Total Sales
                  </dt>

                  <dd className="text-4xl font-extrabold text-white md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div className="flex flex-col px-2 py-6 text-center bg-orange-500 shadow-lg rounded-md">
                  <dt className="order-last text-lg font-medium text-gray-100 dark:text-gray-400">
                    Official Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-white md:text-5xl">
                    24
                  </dd>
                </div>

                </div>

                

                <div className="flex flex-col px-2 py-6 text-center bg-slate-800 shadow-lg rounded-md">
                  <dt className="order-last text-lg font-medium text-gray-100 dark:text-gray-400">
                    Total Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-white md:text-5xl">
                    86
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Atchievements;
