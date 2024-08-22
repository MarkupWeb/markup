"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import NewsData from "./NewsData";
import { useTranslations } from "next-intl";

function NewsUs() {
  // Translations 
  const t = useTranslations("NewsUs");
  const NewsContent = NewsData(t);

  const [activeButton, setActiveButton] = useState("all");
  const [filteredData, setFilteredData] = useState(NewsContent);

  // Convert the Set to an array to avoid TypeScript issues with older targets
  const allCategories = ["all", ...Array.from(new Set(NewsContent.map((item) => item.category)))];

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredData(NewsContent);
    } else {
      const newFilteredData = NewsContent.filter((item) => item.category === category);
      setFilteredData(newFilteredData);
    }
    setActiveButton(category);
  };

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
            {allCategories.map((category) => (
              <button
                key={category}
                className={`news_btn text-[12px] py-[1px] md:py-2.5 lg:py-4 px-4 ${activeButton === category ? "active" : ""}`}
                onClick={() => filterByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
            {filteredData.map((item, index) => (
              <article className="news_card border-[1px] border-[#5d9dfc]" key={index}>
                <div className="relative">
                  <span className="absolute text-[2.2rem] left-[35%] top-[35%] hover:text-blue-600 cursor-pointer bg-white dark:bg-black rounded-full p-4 z-10">
                    <MdOutlineSlowMotionVideo />
                  </span>
                  <Image
                    src={item.imgSrc || "/path-to-default-image.jpg"}
                    alt="news-img"
                    className=""
                    width={466}
                    height={466}
                  />
                </div>

                <div className="news_card_box px-2 py-2">
                  <h1 className="news_card_title mt-2 mb-1">{item.title}</h1>
                  <p className="news_card_subtitle mt-1 mb-2 text-[12px]">{item.subtitle}</p>

                  <div className="News_cart_links flex items-center justify-between">
                    <div className="iconLink flex items-center gap-2">
                      <span className="cursor-pointer">
                        <BsLink45Deg />
                      </span>
                      <span className="cursor-pointer">
                        <FaSquareFacebook />
                      </span>
                    </div>
                    <div className="more flex items-center gap-1 cursor-pointer text-blue-500">
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
