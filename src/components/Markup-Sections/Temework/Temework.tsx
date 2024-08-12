"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import CategoryCard from "@/components/Common/Categories/CategoryCard";
import { useTranslations } from "next-intl";
import TeameworData from "./TeameworkData";
import Image from "next/image";


// CAROUSEL DATA

const Temework = () => {
  const t = useTranslations("Teamework");
  const TeameworkContent = TeameworData(t);

  const records = TeameworkContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}  >
      <CategoryCard {...itemData}  />
    </div>
  );

  return (
    <>
      <section
        id="temework"
        className="md:py-15 lg:py-20 py-5  bg-sky-50 dark:bg-transparent"
      >
        <div className="container">
          <SectionTitle
            title="Temework"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="">
            <SliderList
              records={records}
              renderItem={renderCategories}
              
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Temework;
