"use client";
import React from "react";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import PartnersData from "./PartnersData";
import { useTranslations } from "next-intl";
import CategoryCard from "../../../Common/Categories/CategoryCard";

function PartnersCategory() {
  // translation

  const t = useTranslations("Partners");
  const PartnersContent = PartnersData(t);

  const records = PartnersContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData}  />
    </div>
  );

  return (
    <div className="container">
      <SliderList
        records={records}
        renderItem={renderCategories}
        className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto  hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark `}
      />
    </div>
  );
}

export default PartnersCategory;
