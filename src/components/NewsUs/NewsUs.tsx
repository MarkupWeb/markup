"use client";

import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import videoImg from "../../../public/images/news/branding.jpg";

// CAROUSEL DATA

interface DataType {
  title?: string;
  subtitle?: string;
  imgSrc?: any;
  name?: string;
  students?: number;
  classes?: number;
  price?: number;
  rating?: number;
  bttnname?: string;
}

const postData: DataType[] = [
  {
    title: "Full stack modern",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: videoImg,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
    bttnname: "All News",
  },
  {
    title: "Design system",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: videoImg,
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
    bttnname: "Orange one",
  },
  {
    title: "Design banner",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: videoImg,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
    bttnname: "Apple two",
  },
  {
    title: "We Launch Delia",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
    name: "Colt stelle",
    imgSrc: videoImg,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
    bttnname: "Bnana three",
  },
];

function NewsUs() {
  const [activeButton, setActiveButton] = useState<string>("All News");

  // Filter the news data based on the active button
  const filteredData = postData.filter(
    (item) => activeButton === "All News" || item.bttnname === activeButton
  );

  return (
    <section id="news" className="">
      <div className="container">
        <SectionTitle
          title="News Us"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="lg:flex lg:items-center gap-[3rem] lg:justify-start lg:gap-10 ">
          <div className="flex lg:flex-col gap-[10px] pb-5 ">
            {["All News", "Orange one", "Apple two", "Bnana three"].map((btn) => (
              <button
                key={btn}
                className={`news_btn ${activeButton === btn ? 'active' : ''}`}
                onClick={() => setActiveButton(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
            {filteredData.map((item, index) => (
              <article className="news_card border-[1px] border-[#5d9dfc] " key={index}>
                <div className="relative">
                  <span className="absolute text-[2.2rem] left-[35%] top-[35%] hover:text-blue-600 cursor-pointer bg-white dark:bg-black rounded-full p-4 z-10">
                    <MdOutlineSlowMotionVideo />
                  </span>
                  <Image
                    src={item.imgSrc || videoImg}
                    alt="news-img"
                    className=""
                    width={466}
                    height={466}
                  />
                </div>

                <div className="news_card_box px-2 py-2 ">
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
                    <div className="more flex items-center gap-1 cursor-pointer text-blue-500 ">
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
