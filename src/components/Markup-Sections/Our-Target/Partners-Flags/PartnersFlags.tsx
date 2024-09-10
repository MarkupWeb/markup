import React from "react";
import Link from "next/link";
import Image from "next/image";

import Egypt from "../../../../../public/images/countries-flags/Egypt.png";
import Saudi_Arabia from "../../../../../public/images/countries-flags/Saudi_Arabia.png";
import Emirates from "../../../../../public/images/countries-flags/Emirates.png";
import European_Union from "../../../../../public/images/countries-flags/European-Union.png";

interface IData {
  title: string;
  width: number;
  imgSrc: HTMLImageElement | React.ReactNode | any;
}

const countriesFlags: IData[] = [
  {
    title: "القاهرة، جمهورية مصر العربية",
    width: 10,
    imgSrc: Egypt,
  },

  {
    title: "الرياض، المملكة العربيه السعودية",
    width: 14,
    imgSrc: Saudi_Arabia,
  },

  {
    title: "ابوظبي, الامارات",
    width: 14,
    imgSrc: Emirates,
  },

  {
    title: "نسعي ان يكون عملنا يتضمن بعض البلاد الاوربيه",
    width: 14,
    imgSrc: European_Union,
  },
];

function PartnersFlags() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 my-2 md:mt-5 ">
      {countriesFlags.map((item, i) => (
        <div key={i} className=" flex justify-center items-center flex-col gap-2 px-18 py-1 bg-[#FEF9D9]  shadow-md  rounded-lg">
          <div className="">
            <div className="text-center hover:transition-transform cursor-pointer">
              <Image 
                className="w-[25px] sm:w-[30px] md:w-[30px] lg:w-[30px]"
                src={item.imgSrc}
                alt={item.imgSrc}
                width={0}
                height={0}
              />
            </div>
          </div>
          <h3 className=" text-[8px] md:text-[9px] text-center text-slate-900  font-semibold ">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default PartnersFlags;
