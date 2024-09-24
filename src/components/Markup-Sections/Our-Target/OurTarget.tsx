"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import PartnersFlags from "./Partners-Flags/PartnersFlags";
import Atchievements from "../Achievements";
import OurTargetData from "./OurTargetData";

import Lottie from "lottie-react";
import countries from "../../../../public/lotyFiles/countries.json";
import trip from "../../../../public/lotyFiles/hero_jorny.json";
import { useTranslations } from "next-intl";

const OurTarget: React.FC = () => {
  const t = useTranslations("OurTarget");
  const OurTargetContent = OurTargetData(t);

  return (
    <section id="atchievements" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900">
      <div className="container">
        <SectionTitle
          titleEn="Vision to Reality"
          titleAr= "من الرؤية إلى الواقع"
          paragraphEn="Goal-Oriented Growth: Marketing That Delivers Results, We are your partners in success goals."
          paragraphAr= "نمو موجه باالتخطيط و الأهداف: تسويق يقدم نتائج ملموسه, نحن شركاء في اهداف النجاح"
          center
        />

        <div className="px-8 lg:py-2">
          <div className=" rounded-lg shadow-sm text-center flex flex-col lg:flex-row items-center justify-between lg:px-20">
            <div className="w-full lg:w-[500px] ">
              {OurTargetContent.map((item) => (
                <div className="" key={item.id}>
                  <h2 className="text-2xl text-slate-800 dark:text-white font-semibold mb-3 ">
                    <span className="text-[#F6AA02]  font-semibold">
                      {item.title}
                    </span>
                    <div className="text-xl pt-2 text-blueMain dark:text-white">{item.subtitle}</div>
                  </h2>
                  <p className="text-sm lg:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 overflow-hidden">{item.description}</p>
                </div>
              ))}

              <div className="flex justify-center items-center mt-2">
                <PartnersFlags />
              </div>
            </div>

            

            <div className="hidden lg:block w-[300px] ">
              <Lottie animationData={countries} />
            </div>

            <div className="block lg:hidden w-[300px] ">
              <Lottie animationData={trip} />
            </div>
          </div>

          <div className=" ">
            <Atchievements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTarget;
