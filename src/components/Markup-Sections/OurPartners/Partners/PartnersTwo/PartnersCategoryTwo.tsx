"use client";
import React, { memo } from "react";
import PartnersTwoData from "./PartnersTwoData";
import { useLocale, useTranslations } from "next-intl";
import OtherBrandsCard from "../../../../Common/Categories/OtherBrandsCard";
import GridList2 from "@/components/Logic-List/GridList/GridList2";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";

function PartnersCategoryTwo() {
  // Translation
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
      <PartnerHeader
        titleEn="Together We Shine: Excellence in Various Marketing Fields"
        titleAr="معًا نتألق: بالتفوق في مجالات التسويق المختلفة"
      />

      <GridList2 records={records} renderItem={renderCategories} />
    </div>
  );
}

export default memo(PartnersCategoryTwo);