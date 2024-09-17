"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import PartnersFlags from "./Partners-Flags/PartnersFlags";
import Atchievements from "../Achievements";
import Lottie from "lottie-react";
import countries from "../../../../public/lotyFiles/countries.json";

// Define the type for each achievement item
type Achievement = {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
};

// Define the type for the achievements list
const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

// Dynamic import for AnimatedNumbers with SSR disabled
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const OurTarget: React.FC = () => {
  return (
    <section id="atchievements" className=" py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Atchievments"
          paragraph="Those who have shared with us every shred of success"
          center
        />

        <div className=" px-8 py-2">

        <div className=" rounded-lg shadow-sm text-center flex items-center justify-between lg:px-20">
          <div className="w-[500px]">
            <h2 className="text-2xl text-slate-800 dark:text-white font-semibold mb-3 ">
              <span className="text-[#F6AA02] font-semibold">About MarkUp</span>
              <div className="">Lorem ipsum dolor, sit </div>
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              fuga atque perspiciatis neque, autem voluptas fugit blanditiis
              nulla nesciunt ea.
            </p>
            <div className="flex justify-center items-center mt-2">
          <PartnersFlags />
        </div>
          </div>

          <div className="  w-[300px] ">
            <Lottie animationData={countries} />
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
