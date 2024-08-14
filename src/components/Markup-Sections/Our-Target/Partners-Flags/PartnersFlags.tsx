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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {countriesFlags.map((item, i) => (
        <div key={i} className=" flex justify-center items-center flex-col gap-4 px-10">
          <div className=" ">
            <div className="text-center hover:-translate-y-2 hover:transition-transform cursor-pointer">
              <Image 
                className="w-[100px]  "
                src={item.imgSrc}
                alt={item.imgSrc}
                width={0}
                height={0}
              />
            </div>
            
          </div>
          <h3 className="text-[11px] text-center md:text-[12] font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default PartnersFlags;
