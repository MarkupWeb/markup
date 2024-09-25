"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";

function CategoryCard(itemData: TCategory) {
  const { id, heading, heading2, imgSrc} = itemData;

  // popup ........
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleCardClick = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <>
      <DialogPopUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={selectedData}
      />

      <div
        onClick={() => handleCardClick(itemData)}
        className={`flex justify-center   w-[135px] sm:w-[180px] md:w-[180px] bg-white    h-[140px] md:h-[190px] lg:w-[180px] xl:w-[210px] my-6 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer text-gray-400    hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-slate-800  dark:shadow-2xl  dark:hover:shadow-gray-dark `}
      >
        <div className={`my-3 pt-2 text-center `}>
          <div className="relative ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-[70px] md:w-[120px] bg-[#FCFAEE] shadow-md rounded-full dark:p-1"
            />
          </div>
          <div className="">
            <h3 className="text-sm pt-3 md:pt-2 md:text-md lg:text-lg font-semibold">
              {heading}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
