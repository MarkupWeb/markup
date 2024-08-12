"use client";
import React from "react";
import CategoryCard from "./Partners/CategoryCard";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import PartnersData from "../Partenrs/PartnersData";
import { useTranslations } from "next-intl";

function PartnersCategory() {
  // translation

  const t = useTranslations("Partners");
  const PartnersContent = PartnersData(t);

  const records = PartnersContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData} />
    </div>
  );

  return (
    <div className="container">
      <SliderList records={records} renderItem={renderCategories} />
    </div>
  );
}

export default PartnersCategory;
