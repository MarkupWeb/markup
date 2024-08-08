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

// Import the new Dialog component

// Images
import Img01 from "../../../public/images/Partnars_Logos/01-saltaoon.png";
import Img02 from "../../../public/images/Partnars_Logos/02-nos-dasta.png";
import Img03 from "../../../public/images/Partnars_Logos/03-baheya.png";
import Img04 from "../../../public/images/Partnars_Logos/04-dokan-fteer.png";
import Img05 from "../../../public/images/Partnars_Logos/05-kbsha.png";
import Img06 from "../../../public/images/Partnars_Logos/06-bonoh.png";
import Img08 from "../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png";
import Img09 from "../../../public/images/Partnars_Logos/08-hamam-abdo.png";
import Img10 from "../../../public/images/Partnars_Logos/09-mshakeek.png";
import Img11 from "../../../public/images/Partnars_Logos/10-basha.png";
import Img12 from "../../../public/images/Partnars_Logos/11-chicken-planet.png";
import Img13 from "../../../public/images/Partnars_Logos/12-chicken-fila.png";
import Img14 from "../../../public/images/Partnars_Logos/13-xlarge.png";
import Img15 from "../../../public/images/Partnars_Logos/14-adrenaleen.png";
import Img16 from "../../../public/images/Partnars_Logos/15-cairo-guys.png";
import DialogPopUp from "../Dialog-PopUp/PopUp";

interface ContentItem {
  title: string;
  description: string;
}

// CAROUSEL DATA
interface DataType {
  heading?: string;
  heading2?: string;
  imgSrc?: any;
  name?: string;
  content?: ContentItem[]; // Add this property
}

const postData: DataType[] = [
  {
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt Stelle",
    imgSrc: Img01,
    content: [
      {
        title: "Introduction",
        description: "Learn the basics of modern full-stack JavaScript.",
      },
      {
        title: "Backend",
        description: "Explore Node.js and Express for backend development.",
      },
      {
        title: "Frontend",
        description: "Dive into React and Next.js for frontend development.",
      },
      {
        title: "Database",
        description: "Understand database integration with MongoDB.",
      },
      {
        title: "Deployment",
        description: "Learn how to deploy your applications.",
      },
    ],
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt Stelle",
    imgSrc: Img02,
    content: [
      {
        title: "What is a Design System?",
        description: "Introduction to design systems and their importance.",
      },
      {
        title: "Atomic Design",
        description: "Learn about the principles of atomic design.",
      },
      {
        title: "Component Library",
        description: "Building a component library with React.",
      },
      { title: "Theming", description: "Creating themes and managing styles." },
      {
        title: "Best Practices",
        description: "Follow best practices for maintaining a design system.",
      },
    ],
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img03,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img04,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },


  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img05,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img06,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img08,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },
  // Add more items similarly...
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
          {postData.map((items, i) => (
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
