
"use client";
import React, { memo } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";

interface OtherBrandsCardProps extends TCategory {
  className?: string;
}

// Memoize the component to avoid unnecessary re-renders
const OtherBrandsCard: React.FC<OtherBrandsCardProps> = memo(({ id, heading, imgSrc, className = "" }) => {
  // Check if imgSrc is valid
  if (!imgSrc) {
    console.error(`Image source not provided for card with id: ${id}`);
    return null; // Return null if no image source
  }

  return (
    <div
    key={id}
    className={`hover:grayscale-0 cursor-pointer text-gray-400 mx-5 bg-white shadow-blue-300 shadow-lg dark:shadow-blue-400 rounded-md duration-300 hover:shadow-one`}
  >
    <div className={` my-4 `} >
      <div className=" flex items-center justify-center w-[60px] sm:w-[80px] md:w-[100px] lg:md:w-[120px] md:h-[90px] rounded-full ">
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
  );
});

// Avoid unnecessary re-renders when props do not change
OtherBrandsCard.displayName = "OtherBrandsCard";
export default OtherBrandsCard;
