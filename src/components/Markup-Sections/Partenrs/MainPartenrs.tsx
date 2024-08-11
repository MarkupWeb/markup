"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale, useTranslations } from "next-intl";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useState } from "react";
import PartnersData from "./PartnersData";


// Import the new Dialog component





import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";


// CAROUSEL SETTINGS

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  // centerMode: true,
  slidesToScroll: 2,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const MainPartenrs = () => {
  const local = useLocale();
  
  // Content translation
  const t = useTranslations("Partners");
  const PartnersContent = PartnersData(t);

  // pop Up Contect

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

      <section className="">
        <Slider {...settings}>
          {PartnersContent.map((items, i) => (
            <div key={i} className="">
              <div
                onClick={() => handleCardClick(items)}
                className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto  hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}`}
              >
                <div className={`m-3 py-11 text-center md:my-10`}>
                  <div className="relative ">
                    <Image
                      src={items.imgSrc}
                      alt="user-image"
                      width={100}
                      height={0}
                      className="m-auto inline-block "
                    />
                  </div>
                  <div className="">
                    <h3 className="text-lightblack text-2xl font-semibold">
                      {items.heading}
                    </h3>
                    <h4 className="text-lightblack pt-2 text-lg font-normal opacity-50">
                      {items.heading2}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default MainPartenrs;
