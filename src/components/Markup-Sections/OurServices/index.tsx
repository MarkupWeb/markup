"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import { useLocale, useTranslations } from "next-intl";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import ServicesData from "./ServicesData";
import CategoryCard from "@/components/Common/Categories/CategoryCard";

// CAROUSEL DATA

const OurServices = () => {

  

  const t = useTranslations("Services");
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
          />
        </div>
      </section>
    </>
  );
};

export default OurServices;
