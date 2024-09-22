"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";
import IMG from "../../../../public/images/Teamework/img.jpg";
import patternImg from "../../../../public/images/partners/obasity_icon.png";

function CategoryTestimonials(itemData: TCategory) {
  const { id, heading, heading2, imgSrc } = itemData;

 

  return (
    <>
      <div
        
        className={`flex flex-col lg:px-40 w-full  mx-auto hover:grayscale-0 shadow-xl group transition-all  rounded-3xl cursor-pointer text-gray-400 bg-black hover:bg-white dark:hover:bg-white hover:text-black duration-300 hover:shadow-one dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark`}
      >
        <div className={`container flex relative z-[10] items-center gap-6 pt-5`}>
          <div className={`absolute top-14 z-[-1]`}>
            <Image
              src={patternImg}
              alt="pattern"
              className="m-auto inline-block w-[64px] sm:w-[80px] md:w-[80px] lg:w-[120px] text-blue-500  dark:filter-dark"
            />
          </div>

          <div className="w-[80px] md:w-[90px] lg:w-[120px] rounded-full bg-white border-[4px] border-orangeMain/25 mt-2">
            <Image
              src={IMG}
              alt="user-image"
              className="w-full rounded-full"
            />
          </div>

          

          <div>
            <h3 className="text-lightblack text-[14px] md:text-[16px] lg:text-[20px] font-semibold mt-5">
              {heading}
            </h3>
            <h3 className="text-lightblack text-[12px] md:text-[14px] lg:text-[18px]">
              {heading2}
            </h3>
          </div>
        </div>


        <div className="container pb-8">
        <span className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-orangeMain font-semibold">
          ,,
        </span>

        <div className="pl-4 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold">
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum maiores molestiae, possimus at corrupti."}
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum maiores molestiae, possimus at corrupti."}
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum maiores molestiae, possimus at corrupti."}
        </div>

        <span className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] flex justify-end text-orangeMain font-semibold">
          ,,
        </span>
      </div>

          </div>



        

    </>
  );
}

export default CategoryTestimonials;
