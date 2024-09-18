import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import React from "react";
import PopularPartners from "./PopularPartners/PopluarPartners";
import PartnersCategory from "./Partners/PartnersCategory";
import PopularPartnerRTL from "./PopularPartners/PopularPartnerRTL";
import Popluar from "./PopularPartners";
import PartnersCategoryOne from "./Partners/PartnersOne/PartnersCategoryOne";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";

import obasty from "../../../../public/Patterns/patern-1.png";
import Image from "next/image";
import { useLocale } from "next-intl";

const OurPartners = () => {
  const local = useLocale();
  return (
    <>
      <section
        id="partners"
        className="relative z-10  bg-[#F5F5F5] dark:bg-black py-10 md:py-20 lg:py-28 "
      >
        <div className="container ">
          <SectionTitle
            title="Friends We Shared Success With"
            paragraph="Those who have shared with us every shred of success"
            center
          />

          <div
            className={`absolute   z-[-1] ${local === "ar" ? "left-0" : "right-0"}`}
          >
            <Image
              src={obasty}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-full text-blue-500"
            />
          </div>

          <HeadCategory
            title="Show there are brands"
            btnTitle="More"
            pathText="/partners"
          />

          <div className="flex flex-col gap-8">
            <PartnersCategoryOne />
            <PartnersCategoryOne />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
