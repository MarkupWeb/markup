"use client";
import React from "react";
import PartnersTwoData from "./PartnersTwoData";
import { useLocale, useTranslations } from "next-intl";
import CategoryCard from "../../../../Common/Categories/CategoryCard";
import GridList from "@/components/Logic-List/GridList/GridList";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";
import OtherBrandsCard from "@/components/Common/Categories/OtherBrandsCard";
import GridList2 from "@/components/Logic-List/GridList/GridList2";

function PartnersCategoryTwo() {
  // translation

  const t = useTranslations("PartnersOne");
  const PartnersContent = PartnersTwoData(t);
  const local = useLocale();


  const records = PartnersContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <OtherBrandsCard {...itemData} />
    </div>
  );

  return (
    <div className="container pt-8">
      <PartnerHeader titleEn="Together We Shine: Excellence in Various Marketing Fields" titleAr="معًا نتألق: بالتفوق في مجالات التسويق المختلفة" />

      <GridList2 records={records} renderItem={renderCategories} />

    </div>
  );
}

export default PartnersCategoryTwo;
