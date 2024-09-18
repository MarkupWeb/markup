"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";
import IMG from "../../../../public/images/Teamework/img.jpg";
import patternImg from "../../../../public/images/partners/obasity_icon.png";

function CategoryTestimonials(itemData: TCategory) {
  const { id, heading, heading2, imgSrc } = itemData;

  // popup ........
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TCategory | null>(null);

  const handleCardClick = (data: TCategory) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={() => handleCardClick(itemData)}
        className={`flex flex-col px-2 w-[160px] h-[190px] sm:w-[175px] sm:h-[195px] md:w-[190px] md:h-[230px] lg:w-[250px] lg:h-[265px] mx-auto hover:grayscale-0 shadow-xl rounded-3xl cursor-pointer text-gray-400 bg-black hover:bg-white dark:hover:bg-white hover:text-black duration-300 hover:shadow-one dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark`}
      >
        <div className={`flex relative z-[10] items-center gap-3`}>
          <div className={`absolute top-14 z-[-1]`}>
            <Image
              src={patternImg}
              alt="pattern"
              className="m-auto inline-block w-[64px] sm:w-[80px] md:w-[80px] lg:w-[100px] text-blue-500  dark:filter-dark"
            />
          </div>

          <div className="w-[45px] md:w-[50px] lg:w-[63px] rounded-full bg-white border-[4px] border-blueMain/25 dark:border-orangeMain/25 mt-2">
            <Image
              src={IMG}
              alt="user-image"
              className="w-full rounded-full"
            />
          </div>

          <div>
            <h3 className="text-lightblack text-[10px] md:text-[12px] lg:text-[14px] font-semibold mt-5">
              {heading}
            </h3>
            <h3 className="text-lightblack text-[10px] md:text-[12px] lg:text-[13px]">
              {heading2}
            </h3>
          </div>
        </div>

        <span className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-orangeMain font-semibold">
          ,,
        </span>

        <div className="pl-4 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold">
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum maiores molestiae, possimus at corrupti."}
        </div>

        <span className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] flex justify-end text-orangeMain font-semibold">
          ,,
        </span>
      </div>

    </>
  );
}

export default CategoryTestimonials;
