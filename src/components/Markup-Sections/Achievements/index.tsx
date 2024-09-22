"use client";

import React, { useMemo } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router"; // Next.js hook to get locale
import { useLocale } from "next-intl";
import Image from "next/image";
import patternImg from "../../../../public/images/partners/obasity_icon.png";

// Define TypeScript interfaces for better type checking
interface Achievement {
  title_en: string;
  title_ar: string;
  count: number;
  color: string;
  Tcolor: string;
  duration?: number;
}

const Achievements = () => {
  const locale = useLocale();

  // useMemo to prevent recreation of the same array on every render
  const achievements: Achievement[] = useMemo(
    () => [
      {
        title_en: "Success Partners",
        title_ar: "شركاء النجاح",
        
        count: 500,
        color: "bg-green-400",
        Tcolor: "text-green-400",

        duration: 10,
      },
      {
        title_en: "Paid Campaigns",
        title_ar: "الحملات المدفوعة",
        count: 2400,
        color: "bg-blueMain ",
        Tcolor: "text-blueMain dark:text-white",

        duration: 8,
      },
      {
        title_en: "Designs & Videos",
        title_ar: "تصاميم وفيديوهات",

        
        count: 5000,
        color: "bg-orangeMain",
        Tcolor: "text-orangeMain",
        duration: 8,
      },
      {
        title_en: "Official Addons",
        title_ar: "الاضافات الرسمية",
        
        count: 1000,
        color: "bg-red-600",
        Tcolor: "text-red-600",
        duration: 8,
      },
    ],
    []
  );

  // useInView hook to check if the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref} className="pb-10">
      <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-9">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`  flex flex-col relative z-10 items-center p-2 sm:p-4 md:p-6 text-center shadow-xl  rounded-lg bg-white dark:bg-dark`}
              aria-label={` ${
                locale === 'en'
                  ? achievement.title_en
                  : achievement.title_ar
              } count: ${achievement.count}`}
            >
              <div className={`absolute top-2 z-[-1]`}>
            <Image
              src={patternImg}
              alt="pattern"
              className="m-auto inline-block w-[40px] sm:w-[40px] md:w-[50px] lg:w-[60px] text-blue-500  dark:filter-dark"
            />
          </div>
              <dd className={`mt-2 text-lg lg:text-3xl font-bold  ${achievement.Tcolor}`}>
                +{inView && (
                  <CountUp
                    end={achievement.count}
                    duration={achievement.duration || 8}
                  />
                )}
              </dd>
              <dt className="text-md lg:text-lg font-medium ">
                {locale === 'en'
                  ? achievement.title_en
                  : achievement.title_ar}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Achievements;
