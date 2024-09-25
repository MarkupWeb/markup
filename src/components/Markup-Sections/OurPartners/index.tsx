import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import React from 'react'
import PopularPartners from './PopularPartners/PopluarPartners';
import PopularPartnerRTL from './PopularPartners/PopularPartnerRTL';
import Popluar from './PopularPartners';
import PartnersCategoryOne from './Partners/PartnersOne/PartnersCategoryOne';
import HeadCategory from '@/components/Common/Head-Category/HeadCategory';

import obasty from "../../../../public/images/partners/obasity_icon.png"
import Image from 'next/image';
import PartnersCategoryTwo from './Partners/PartnersTwo/PartnersCategoryTwo';



const OurPartners = () => {
    return (
      <>
        <section id="partners" className="bg-[#F5F5F5] dark:bg-slate-900 py-10 md:py-20 lg:py-28">
          <div className="container ">
            <SectionTitle
              titleEn="Friends We Shared Success With"
              titleAr="الأصدقاء الذين شاركنا معهم النجاح"

              paragraphEn="We have been sharing our vision; together, we pave the way to success and Effective excellence and focus on the future."
              paragraphAr="شاركنا رؤيتنا معًا لرسم طرق النجاح والتميز الفعال والتركيز علي المستقبل."
              center
            />

            

            <HeadCategory title_en='All Partners' title_ar='جميع شركائنا' btnTitle_en='More' btnTitle_ar='المزيد' pathText='/partners'  />
  
            <div className="flex flex-col gap-8">
              <PartnersCategoryOne />
              <PartnersCategoryTwo/>
            </div>
            
          </div>
        </section>
      </>
    );
  };
  
  export default OurPartners;