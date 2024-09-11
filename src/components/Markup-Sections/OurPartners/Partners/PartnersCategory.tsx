"use client";
import React from "react";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import PartnersData from "./PartnersData";
import { useTranslations } from "next-intl";
import CategoryCard from "../../../Common/Categories/CategoryCard";
import GridList from "@/components/Logic-List/GridList/GridList";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";

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
     

      <GridList
        records={records}
        renderItem={renderCategories}
      />
    </div>
  );
}

export default PartnersCategory;
