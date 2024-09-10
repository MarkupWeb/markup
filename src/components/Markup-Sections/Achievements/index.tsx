"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
  // useInView hook to check if the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref} className="pb-10">
      <div className="mx-auto max-w-screen-xl sm:px-6 md:py-0">
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 gap-9 sm:grid-cols-2 lg:grid-cols-4 content-center items-center sm:divide-x sm:divide-gray-100 dark:sm:divide-gray-800">
            {/* First column */}
            
              <div className="flex flex-col px-1 py-4  text-center bg-green-400 shadow-lg rounded-md">
                <dt className="order-last text-md font-medium text-gray-100 ">
                Paid Campaigns

                </dt>
                <dd className="text-2xl font-extrabold text-white">+ 
                  {inView && (
                    <CountUp end={400} separator="," duration={10} />
                  )}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>

              

              <div className="flex flex-col px-1 py-4 text-center bg-orange-400 shadow-lg rounded-md">
                <dt className="order-last text-md font-medium text-gray-100 ">
                Designs and Videos
                </dt>
                <dd className="text-xl font-extrabold text-white">+ 
                  {inView && <CountUp end={24} duration={8} />}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>


              <div className="flex flex-col px-1 py-4 text-center bg-blue-500 shadow-lg rounded-md">
                <dt className="order-last text-md font-medium text-gray-100 ">
                  Official Addons
                </dt>
                <dd className="text-2xl font-extrabold text-white">+ 
                  {inView && <CountUp end={24} duration={8} />}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>

              <div className="flex flex-col px-1 py-4 text-center bg-[#d5c537] shadow-lg rounded-md">
                <dt className="order-last text-md font-medium text-gray-100 ">
                  Our Success Partners
                </dt>
                <dd className="text-2xl font-extrabold text-white">+ 
                  {inView && <CountUp end={70} duration={8} />}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>

              
            

            {/* Second column */}
            
            


          </dl>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
