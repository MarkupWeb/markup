"use client";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";
import { FaChartSimple } from "react-icons/fa6";

import Image from "next/image";
import PrevArrow from "../Partenrs/PrevArrow";
import NextArrow from "../Partenrs/NextArrow";


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
];

// CAROUSEL SETTINGS

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
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

  return (
    <>
      <section id="services" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`pt-10 pl-8 pb-10 pr-6 shadow-xl group mx-3 my-2  rounded-2xl  px-3  cursor-pointer   bg-white hover:bg-blue-400 p-8  duration-300 hover:shadow-one hover:dark:bg-blue-400 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}   `}
                >
                  <div className={`relative rounded-3xl flex  `}>
                    <div
                      className={` ${local === "ar" ? "__rtl_lang bg-gree  " : ""} `}
                    >
                      <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white dark:text-white">
                        {items.heading}
                      </h4>
                      <Image
                        src={items.imgSrc}
                        alt={items.imgSrc}
                        width={100}
                        height={100}
                        className="mb-5"
                      />
                    </div>
                  </div>

                  <div className="px-3 ">
                    <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5 dark:text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus, sint?
                    </h4>
                    <Link
                      href="#"
                      className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
                    >
                      show more
                    </Link>
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
