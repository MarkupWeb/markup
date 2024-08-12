"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import ServicesData from "./ServicesData";
import CategoryCard from "@/components/Common/Categories/CategoryCard";

// CAROUSEL DATA

const OurServices = () => {
  const local = useLocale();

  // pop Up Contect

  let [isOpens, setIsOpens] = useState(false);

  const t = useTranslations("Partners");
  const ServicesContent = ServicesData(t);

  const records = ServicesContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData} />
    </div>
  );

  return (
    <>
      <section id="services" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <SliderList
            records={records}
            renderItem={renderCategories}
            className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[240px]  mx-auto  my-4  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white  hover:bg-blue-400 dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark `}
          />
        </div>
      </section>
    </>
  );
};

export default OurServices;
