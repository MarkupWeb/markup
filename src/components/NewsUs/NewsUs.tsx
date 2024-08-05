"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

import { BsLink45Deg } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";


import videoImg from "../../../public/images/news/branding.jpg";

import { MdOutlineSlowMotionVideo } from "react-icons/md";
import NextArrow from "../Partenrs/NextArrow";
import PrevArrow from "../Partenrs/PrevArrow";

// CAROUSEL DATA

interface DataType {
  title: string;
  subtitle: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    title: "Full stack modern",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/04.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    title: "Design system",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/06.png",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    title: "Design banner",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/12.png",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    title: "We Launch Delia",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/02.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  
];

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  
 

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]




};







function NewsUs() {
  const local = useLocale();
  return (
    <section id="news" className="">
      <div className="container">
        <SectionTitle
          title="News Us"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="lg:flex lg:items-center gap-[3rem]  lg:justify-start lg:gap-10 ">
          <div className="flex lg:flex-col gap-[10px] pb-5 ">
            <button className="news_btn active">All News</button>
            <button className="news_btn">Orange one</button>
            <button className="news_btn">Apple two</button>
            <button className="news_btn">Bnana three</button>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`pt-10 pl-8 pb-10 pr-6 shadow-xl group mx-3 my-2  rounded-2xl  px-3  cursor-pointer   bg-white hover:bg-blue-400 p-8  duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}   `}
                >
                  <div className={`relative rounded-3xl flex  `}>
                    <div
                      className={` ${local === "ar" ? "__rtl_lang bg-gree  " : ""} `}
                    >
                      <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                        {items.title}
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
                    <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
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
      </div>
    </section>
  );
}

export default NewsUs;
