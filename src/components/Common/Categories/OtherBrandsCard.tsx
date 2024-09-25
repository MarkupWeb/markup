"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";

function OtherBrandsCard(itemData: TCategory) {
  const { id, heading, heading2, imgSrc } = itemData;

  

  return (
    <>
      <div
        className={`hover:grayscale-0 cursor-pointer text-gray-400 mx-5 bg-white shadow-blue-300 shadow-lg dark:shadow-blue-500 rounded-md duration-300 hover:shadow-one   `}
      >
        <div className={` my-4 `}>
          <div className=" flex items-center justify-center sm:w-[100px] md:w-[120px] md:h-[90px] rounded-full ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={0}
              height={0}
              className="w-[80px] "
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default OtherBrandsCard;
