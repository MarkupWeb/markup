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
import ModalVideo from "react-modal-video";
import { Link } from "@/navigation";
import { HiChevronRight } from "react-icons/hi2";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";


function NewsUs() {
  const [openVideoId, setOpenVideoId] = useState(null); // Track which video ID is open

    


  

  // Translations
  const t = useTranslations("NewsUs");
  const NewsContent = NewsData(t);

  // Extract unique categories from the NewsContent
  const allCategories = Array.from(
    new Set(NewsContent.map((item) => item.category)),
  );

  // Set initial state to the first category's items
  const [activeButton, setActiveButton] = useState(allCategories[0]);
  const [filteredData, setFilteredData] = useState(
    NewsContent.filter((item) => item.category === allCategories[0]),
  );

  const filterByCategory = (category) => {
    const newFilteredData = NewsContent.filter(
      (item) => item.category === category,
    );
    setFilteredData(newFilteredData);
    setActiveButton(category);
  };

  return (
    <section id="news" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container">
        <SectionTitle
          titleEn="MarkUP’s Community"
          titleAr="مجتمع MarkUP"
          paragraphEn="Hear from us and learn for free!"
          paragraphAr="اسمع منا وتعلم مجانًا!"
          center
        />

        <div className="pb-5">
        <HeadCategory title_en='Learning With Us' title_ar='تعلم معنا' btnTitle_en='More' btnTitle_ar='المزيد' pathText='/blog'  />

        </div>

        

        <div className="lg:flex lg:items-center gap-[3rem] lg:justify-start lg:gap-10">
          <div className="flex lg:flex-col gap-[10px] pb-5 ">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`news_btn bg-slate-800  text-white shadow-xl text-[12px] py-[8px] sm:py-[10px] md:py-2.5 lg:py-4 px-4 ${activeButton === category ? "active" : ""}`}
                onClick={() => filterByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden ">
            {filteredData.map((item) => (
              <article className="border-[1px] border-[#5d9dfc] shadow-xl  " key={item.id}>
                <ModalVideo
                  channel="youtube"
                  isOpen={openVideoId === item.videoId}
                  videoId={item.videoId}
                  onClose={() => setOpenVideoId(null)}
                />

                <div className="relative">
                  <span
                    className="absolute text-[2rem] left-[38%] sm:left-[40%] top-[29%] sm:top-[35%] hover:text-blue-600 cursor-pointer bg-white/50 dark:bg-black/70  rounded-full p-2 z-10"
                    onClick={() => setOpenVideoId(item.videoId)}
                  >
                    <MdOutlineSlowMotionVideo />
                  </span>
                  <Image
                    src={item.imgSrc}
                    alt="thumnial"
                    width={1200}
                    height={600}
                    priority
                  />
                </div>

                <div className=" px-2 py-2">
                  <h1 className=" text-[0.8rem] mt-2 mb-1">{item.title}</h1>
                  <p className=" mt-1 mb-3 text-[11px] text-[#555]">
                    {item.subtitle}
                  </p>

                  <div className=" flex items-center justify-between">
                    <span className="cursor-pointer">
                      <BsLink45Deg />
                    </span>
                    <span className="cursor-pointer">
                      <FaSquareFacebook />
                    </span>
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
