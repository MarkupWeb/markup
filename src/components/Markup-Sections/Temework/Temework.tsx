"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import SliderList from "@/components/Logic-List/MultipleSlider/SliderList";
import { useTranslations } from "next-intl";
import TeameworData from "./TeameworkData";
import Image from "next/image";
import CategoryCardTeamework from "@/components/Common/Categories/CategoryCardTeamework";
import NewList from "@/components/Logic-List/NewList/NewList";


// CAROUSEL DATA

const Temework = () => {
  const t = useTranslations("Teamework");
  const TeameworkContent = TeameworData(t);

  const records = TeameworkContent;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}  >
      <CategoryCardTeamework {...itemData}  />
    </div>
  );

  return (
    <>
      <section
        id="temework"
        className="md:py-15 lg:py-20 py-5   bg-[#F5F5F5] dark:bg-slate-900"
      >
        <div className="container flex flex-col gap-5">
          <SectionTitle
            titleEn="Our Creative Team"
            titleAr="فريقنا الإبداعي"
            paragraphEn="MarkUP Family"
            paragraphAr="عائله ماركب"
            center
          />
          <div className="">
            <NewList
              records={records}
              renderItem={renderCategories} emptyMessage={"There is no category"}              
              
            />
            
          </div>

          <div className="">
            <NewList
              records={records}
              renderItem={renderCategories} emptyMessage={"There is no category"}              
              
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Temework;
