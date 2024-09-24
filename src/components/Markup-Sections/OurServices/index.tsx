"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import { useLocale, useTranslations } from "next-intl";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import ServicesData from "./ServicesData";
import CategoryServices from "@/components/Common/Categories/CategoryServices";
import NewList from "@/components/Logic-List/NewList/NewList";

// CAROUSEL DATA

const OurServices = () => {

  

  const t = useTranslations("Services");
  const ServicesContent = ServicesData(t);

  const records = ServicesContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryServices {...itemData} />
    </div>
  );

  return (
    <>
      <section id="services" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900">
        <div className="container">
          
          <SectionTitle
            titleEn="Strategies and plans "
            titleAr="الاسترتجيات و التخطيط"
            paragraphEn="Our marketing strategies are designed to drive success for your business through a comprehensive and customized approach and we put them into action plans that are achieving your goals"
            paragraphAr="استرتجيات التسويق الوصول الي نجحات كبيره في العمل"
            center
          />

          

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
