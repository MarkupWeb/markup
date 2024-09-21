"use client";
import React from "react";
import PartnersDataOne from "./PartnersOneData";
import { useLocale, useTranslations } from "next-intl";
import CategoryCard from "../../../../Common/Categories/CategoryCard";
import GridList from "@/components/Logic-List/GridList/GridList";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";

function PartnersCategoryOne() {
  // translation

  const t = useTranslations("PartnersOne");
  const PartnersContent = PartnersDataOne(t);
  const local = useLocale();


  const records = PartnersContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData} />
    </div>
  );

  return (
    <div className="container pt-10">
      <PartnerHeader titleEn="From Plates to Profits: Captivating Marketing for RestaurantS" titleAr="من الأطباق إلى النتائج و الأرباح: تسويق جذاب لجميع المطاعم" />

      <GridList records={records} renderItem={renderCategories} />

    </div>
  );
}

export default PartnersCategoryOne;
