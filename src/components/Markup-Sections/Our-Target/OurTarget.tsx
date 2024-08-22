"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import PartnersFlags from "./Partners-Flags/PartnersFlags";
import Atchievements from "../Achievements";
import Lottie from "lottie-react";
import countries from "../../../../public/lotyFiles/countries.json"

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
    <section id="atchievements" className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Atchievments"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="flex flex-row justify-center">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <Atchievements />

          <div className="w-[300px] ">
            <Lottie animationData={countries} />
          </div>


        </div>


        </div>


        <div className="bg-slate-800 p-10 rounded-lg shadow-sm">
          <h2 className="text-xl text-white fon ">
            Lorem ipsum dolor sit amet consectetur <span className="text-orange-600 font-semibold">adipisicing elit</span> 
          </h2>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum doloribus quibusdam quos soluta ad?
          </p>

        </div>

        



        <div className="flex justify-center items-center pt-10">
          <PartnersFlags />
        </div>

        
      </div>
    </section>
  );
};

export default OurTarget;
