"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

import { useLocale, useTranslations } from "next-intl";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import TestimonialsData from "./TestimonialsData";
import CategoryServices from "@/components/Common/Categories/CategoryServices";
import NewList from "@/components/Logic-List/NewList/NewList";
import Image from "next/image";
import obasty from "../../../../public/images/partners/obasity_icon.png";
import Vonders from "../Hero/vonder";
import CategoryTestimonials from "@/components/Common/Categories/CatgegoryTestimonials";

// CAROUSEL DATA

const OurServices = () => {
  const t = useTranslations("Services");
  const ServicesContent = TestimonialsData(t);
  const local = useLocale();

  const records = ServicesContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryTestimonials {...itemData} />
    </div>
  );

  return (
    <>
      <section id="services" className="relative py-10 md:py-20 lg:py-28 z-10 bg-[#F5F5F5] dark:bg-black">
        <div className="container">
          <SectionTitle
            title="Our Testimonials "
            paragraph="Our marketing strategies are designed to drive success for your business through a comprehensive and customized approach and we put them into action plans that are achieving your goals"
            center
          />

          <div
            className={`absolute  top-14 z-[-1] ${local === "ar" ? "left-0" : "right-0"}`}
          >
            <Image
              src={obasty}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-[100px] md:w-[300px] text-blue-500"
            />
          </div>

          <NewList
            records={records}
            renderItem={renderCategories}
            emptyMessage="There is no category"
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
