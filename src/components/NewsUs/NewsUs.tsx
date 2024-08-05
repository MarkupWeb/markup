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
import { NewsUsCard } from "./NewsUsCard";

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
          
            {postData.map((item, index) => (
              <div
              className=""
              key={index}
            >
              <ul className="space-y-8 mx-3 my-5">
                <li className="text-sm leading-6">
                  <NewsUsCard
                    name={item.title}
                    position={item.subtitle}
                    text="Find God."
                    photoLink="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                    tweetLink="https://twitter.com/kanyewest"
                  />
                </li>
              </ul>
            </div>
          ))}
       
      
            

          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsUs;
