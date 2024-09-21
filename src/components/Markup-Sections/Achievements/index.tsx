"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Define TypeScript interfaces for better type checking (optional)
interface Achievement {
  title: string;
  count: number;
  color: string;
  duration?: number;
}

const Achievements = () => {
  // Dynamic data for achievements
  const achievements: Achievement[] = [
    {
      title: "Paid Campaigns",
      count: 400,
      color: "bg-blueMain",
      duration: 10,
    },
    {
      title: "Designs and Videos",
      count: 24,
      color: "bg-green-300",
      duration: 8,
    },
    {
      title: "Official Addons",
      count: 24,
      color: "bg-orangeMain",
      duration: 8,
    },
    {
      title: "Our Success Partners",
      count: 70,
      color: "bg-red-600",
      duration: 8,
    },
    
  ];

  // useInView hook to check if the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref} className="pb-10 bg-gray-100 dark:bg-gray-900" >
      <div className="">
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2  md:grid-cols-4 gap-6 sm:gap-9">
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-2 sm:p-4 md:p-6  text-center shadow-lg rounded-md ${achievement.color}`}
              >
                <dd className="mt-2 text-lg lg:text-3xl font-extrabold text-white">
                  +{inView && (
                    <CountUp end={achievement.count} duration={achievement.duration || 8} />
                  )}
                </dd>
                <dt className="text-md lg:text-lg font-medium text-gray-100">
                  {achievement.title}
                </dt>
                
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
