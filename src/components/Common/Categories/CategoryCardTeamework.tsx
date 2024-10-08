"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";
import IMG from '../../../../public/images/Teamework/img.jpg'
function CategoryCardTeamework(itemData: TCategory) {
  const { id, heading, heading2, imgSrc} = itemData;

  

  return (
    <>
      <div
        className={`flex items-center justify-center  w-[160px]  h-[190px] sm:w-[175px]  sm:h-[195px]  md:w-[190px]  md:h-[230px]   lg:w-[250px] lg:h-[265px]  mx-auto grayscale hover:grayscale-0  shadow-xl   rounded-3xl my-5   cursor-pointer text-gray-400   bg-slate-800 hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark `}
        >
        <div className={`m-3 py-11 text-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] `}>
          <div className="relative ">
            <Image
              src={IMG}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block rounded-lg mt-2 hover:text-filter-dark filter-light hover:filter-dark"
            />
          </div>
          <div className="">
            <h3 className="text-lightblack text-md md:text-lg lg:text-xl  font-semibold pt-2">
              {heading}
            </h3>
            <h4 className="text-lightblack pt-2 text-lg font-normal opacity-50">
              {heading2}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCardTeamework;