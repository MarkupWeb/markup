"use client";
import React from "react";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import PartnersDataOne from "./PartnersOneData";
import { useTranslations } from "next-intl";
import CategoryCard from "../../../../Common/Categories/CategoryCard";
import GridList from "@/components/Logic-List/GridList/GridList";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";

function PartnersCategoryOne() {
  // translation

  const t = useTranslations("PartnersOne");
  const PartnersContent = PartnersDataOne(t);

  const records = PartnersContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData}  />
    </div>
  );

  return (
    <div className="container">
      <PartnerHeader title="GREAT SUCCESS STORIES" />

      <GridList
        records={records}
        renderItem={renderCategories}
      />
    </div>
  );
}

export default PartnersCategoryOne;
