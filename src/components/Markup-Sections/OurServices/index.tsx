"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";
import { FaChartSimple } from "react-icons/fa6";

import Image from "next/image";
import PrevArrow from "../Partenrs/PrevArrow";
import NextArrow from "../Partenrs/NextArrow";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt stelle",
    imgSrc: "/images/about/imgOne.svg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt stelle",
    imgSrc: "/images/about/imgTwo.svg",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/about/imgThree.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/about/imgThree.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/about/imgThree.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/about/imgThree.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/about/imgThree.svg",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

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

const OurServices = () => {
  const local = useLocale();

  // pop Up Contect

  let [isOpens, setIsOpens] = useState(false);

  return (
    <>
      <Dialog
        open={isOpens}
        onClose={() => setIsOpens(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/30 dark:bg-white/30"
          aria-hidden="true"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}

            <Dialog.Panel className="mx-auto max-w-sm rounded bg-black">
              <div className="bg-black py-3 mx-4 flex justify-end">
                <span
                  className=" text-center bg-[#7c7c7c] cursor-pointer rounded-lg w-[30px] h-[30px]"
                  onClick={() => setIsOpens(false)}
                >
                  X
                </span>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      <section id="services" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i} className="">
                <div
                  onClick={() => setIsOpens(true)}
                  className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto  my-4  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white  hover:bg-blue-400 dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}`}
                >
                  <div className="m-3 py-14 text-center md:my-10">
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
        </div>
      </section>
    </>
  );
};

export default OurServices;
