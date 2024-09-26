
"use client";
import React, { memo } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";

interface OtherBrandsCardProps extends TCategory {
  className?: string;
}

// Memoize the component to avoid unnecessary re-renders
const OtherBrandsCard: React.FC<OtherBrandsCardProps> = memo(({ id, heading, imgSrc, className = "" }) => {
  

  return (
    <div
    key={id}
    className={`flex items-center justify-center hover:grayscale-0 cursor-pointer text-gray-400 mx-5 my-2 bg-white w-[62px] h-[60px] sm:w-[90px] sm:h-[70px] md:w-[110px] md:h-[85px] lg:w-[100px] xl:w-[110px] shadow-blue-300 shadow-lg dark:shadow-blue-400 rounded-md duration-300 hover:shadow-one`}
  >
    <div className={` my-4 `} >
      <div className=" flex items-center justify-center w-[55px] sm:w-[70px] md:w-[75px] lg:md:w-[120px] md:h-[90px] rounded-full ">
        <Image
          src={imgSrc}
          alt={heading}
          width={0}
          height={0}
          className="lg:w-[80px] "
        />
      </div>
      
    </div>
  </div>
  );
});

// Avoid unnecessary re-renders when props do not change
OtherBrandsCard.displayName = "OtherBrandsCard";
export default OtherBrandsCard;
