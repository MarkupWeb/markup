"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import CategoryCard from "@/components/Common/Categories/CategoryCard";
import { useTranslations } from "next-intl";
import TeameworData from "./TeameworkData";
import Image from "next/image";


// CAROUSEL DATA

const Temework = () => {
  const t = useTranslations("Teamework");
  const TeameworkContent = TeameworData(t);

  const records = TeameworkContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}  >
      <CategoryCard {...itemData}  />
    </div>
  );

  return (
    <>
      <section
        id="temework"
        className="md:py-15 lg:py-20 py-5  bg-sky-50 dark:bg-transparent"
      >
        <div className="container">
          <SectionTitle
            title="Temework"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="">
            <SliderList
              records={records}
              renderItem={renderCategories}
              
              className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto grayscale hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-slate-800 hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark `}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Temework;
