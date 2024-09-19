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
      color: "bg-orangeMain",
      duration: 8,
    },
    {
      title: "Official Addons",
      count: 24,
      color: "bg-[#5555]",
      duration: 8,
    },
    {
      title: "Our Success Partners",
      count: 70,
      color: "bg-blueMain",
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
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-0">
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-9">
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 text-center shadow-lg rounded-md ${achievement.color}`}
              >
                <dd className="mt-2 text-3xl font-extrabold text-white">
                  +{inView && (
                    <CountUp end={achievement.count} duration={achievement.duration || 8} />
                  )}
                </dd>
                <dt className="text-lg font-medium text-gray-100">
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
