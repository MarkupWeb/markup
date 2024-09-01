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
          <dl className="grid grid-cols-1 gap-9 sm:grid-cols-2 content-center items-center sm:divide-x sm:divide-gray-100 dark:sm:divide-gray-800">
            {/* First column */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col px-3 py-6 text-center bg-green-300 shadow-lg rounded-md">
                <dt className="order-last text-lg font-medium text-gray-100 ">
                  Total Sales
                </dt>
                <dd className="text-4xl font-extrabold text-white">
                  {inView && (
                    <CountUp end={400} separator="," duration={10} />
                  )}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>

              

              <div className="flex flex-col px-2 py-6 text-center bg-[#F6AA02] shadow-lg rounded-md">
                <dt className="order-last text-lg font-medium text-gray-100 ">
                  Official Addons
                </dt>
                <dd className="text-4xl font-extrabold text-white">
                  {inView && <CountUp end={24} duration={8} />}
                  {/* Counter will start when inView is true */}
                </dd>
              </div>

              
            </div>

            {/* Second column */}
            <div className="flex flex-col px-2 py-6 text-center bg-blue-400 shadow-lg rounded-md">
              <dt className="order-last text-lg font-medium text-gray-100 ">
                Customer Satisfaction
              </dt>
              <dd className="text-4xl font-extrabold text-white">
                {inView && <CountUp end={95} suffix="%" duration={7} />}
                {/* Counter will start when inView is true */}
              </dd>
            </div>

            


          </dl>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
