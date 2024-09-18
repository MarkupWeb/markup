"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import { useLocale, useTranslations } from "next-intl";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import ServicesData from "./ServicesData";
import CategoryServices from "@/components/Common/Categories/CategoryServices";
import NewList from "@/components/Logic-List/NewList/NewList";
import Image from "next/image";
import obasty from "../../../../public/images/partners/obasity_icon.png";
import Vonders from "../Hero/vonder";

// CAROUSEL DATA

const OurServices = () => {
  const t = useTranslations("Services");
  const ServicesContent = ServicesData(t);
  const local = useLocale();

  const records = ServicesContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryServices {...itemData} />
    </div>
  );

  return (
    <>
      <section id="services" className="relative py-10 md:py-20 lg:py-28 z-10 ">
        <div className="container">
          <SectionTitle
            title="Strategies and plans "
            paragraph="Our marketing strategies are designed to drive success for your business through a comprehensive and customized approach and we put them into action plans that are achieving your goals"
            center
          />

          <Vonders />

          <NewList
            records={records}
            renderItem={renderCategories}
            emptyMessage="There is no category"
          />
        </div>
      </section>
    </>
  );
};

export default OurServices;
