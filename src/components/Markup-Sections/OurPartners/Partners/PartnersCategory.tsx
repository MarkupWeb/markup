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
      <div className="">
      <SliderList
        records={records}
        renderItem={renderCategories}
      />

      </div>
      
    </div>
  );
}

export default PartnersCategory;
