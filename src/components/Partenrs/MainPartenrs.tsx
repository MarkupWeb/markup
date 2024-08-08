"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useState } from "react";
// Images 
import Img01 from "../../../public/images/Partnars_Logos/01-saltaoon.png"
import Img02 from "../../../public/images/Partnars_Logos/02-nos-dasta.png"
import Img03 from "../../../public/images/Partnars_Logos/03-baheya.png"
import Img04 from "../../../public/images/Partnars_Logos/04-dokan-fteer.png"
import Img05 from "../../../public/images/Partnars_Logos/05-kbsha.png"
import Img06 from "../../../public/images/Partnars_Logos/06-bonoh.png"
import Img08 from "../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png"
import Img09 from "../../../public/images/Partnars_Logos/08-hamam-abdo.png"
import Img10 from "../../../public/images/Partnars_Logos/09-mshakeek.png"
import Img11 from "../../../public/images/Partnars_Logos/10-basha.png"
import Img12 from "../../../public/images/Partnars_Logos/11-chicken-planet.png"
import Img13 from "../../../public/images/Partnars_Logos/12-chicken-fila.png"
import Img14 from "../../../public/images/Partnars_Logos/13-xlarge.png"
import Img15 from "../../../public/images/Partnars_Logos/14-adrenaleen.png"
import Img16 from "../../../public/images/Partnars_Logos/15-cairo-guys.png"

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: any;
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
    imgSrc: Img01,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt stelle",
    imgSrc: Img02,
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: Img03,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img04,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img05,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img06,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },


  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img08,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img09,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: Img10,
    students: 150,
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



const MainPartenrs = () => {
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


      <section className="">
      <Slider {...settings}>
              
              {postData.map((items, i) => (
                <div key={i} className="">
                  <div
                  onClick={() => setIsOpens(true)}
                    className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto  hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}`}
                  >
                    
                      <div className={`m-3 py-11 text-center md:my-10 `}>
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
