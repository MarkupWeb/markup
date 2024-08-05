"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videoImg from "../../../public/images/news/branding.jpg";

import { MdOutlineSlowMotionVideo } from "react-icons/md";
import NextArrow from "../Partenrs/NextArrow";
import PrevArrow from "../Partenrs/PrevArrow";

// CAROUSEL DATA

interface DataType {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  name?: string;
  students?: number;
  classes?: number;
  price?: number;
  rating?: number;
  bttnName?: string;
  
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

const ButtonData: DataType[] = [
  {
    bttnName: 'All Food'
  },
  {
    bttnName: 'Pasta'
  },
  {
    bttnName: 'Pizaa'
  },
  {
    bttnName: 'Apple'
  },
]





function NewsUs() {
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
            {
              ButtonData.map((item, index) => (
                <button className="news_btn">
                  {item.bttnName}

                </button>

              ))
            }
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
          
            {postData.map((item, index) => (
              <article className="news_card border-[1px] border-[#5d9dfc] " key={index}>
                <div className="relative">
                  <span className="absolute text-[2.2rem]  left-[35%] top-[35%] hover:text-blue-600 cursor-pointer  bg-white  dark:bg-black rounded-full  p-4 z-10">
                    <MdOutlineSlowMotionVideo />
                  </span>
                  <Image
                    src={videoImg}
                    alt="news-img"
                    className=""
                    width={466}
                    height={466}
                  />
                </div>

                <div className="news_card_box  px-2 py-2 ">
                  <h1 className="news_card_title mt-2 mb-1">{item.title}</h1>
                  <p className="news_card_subtitle mt-1 mb-2">
                    {item.subtitle}
                  </p>

                  <div className="News_cart_links flex items-center justify-between ">
                    <div className="iconLink flex items-center gap-2">
                      <span className="cursor-pointer">
                        <BsLink45Deg />
                      </span>
                      <span className="cursor-pointer">
                        <FaSquareFacebook />
                      </span>
                    </div>
                    <div className="more flex items-center gap-1 cursor-pointer  text-blue-500 ">
                      <span className="text-[12px]">More</span>
                      <span className="">
                        <HiArrowSmallRight />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            

          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsUs;
