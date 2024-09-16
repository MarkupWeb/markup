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
        className="md:py-15 lg:py-20 py-5  dark:bg-transparent"
      >
        <div className="container">
          <SectionTitle
            title="Our creative team"
            paragraph="MarkUP family"
            center
          />
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
