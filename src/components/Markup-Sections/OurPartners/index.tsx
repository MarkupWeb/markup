import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import React from 'react'
import PopularPartners from './PopularPartners/PopluarPartners';
import PartnersCategory from './Partners/PartnersCategory';
import PopularPartnerRTL from './PopularPartners/PopularPartnerRTL';
import Popluar from './PopularPartners';
import PartnersCategoryOne from './Partners/PartnersOne/PartnersCategoryOne';
import HeadCategory from '@/components/Common/Head-Category/HeadCategory';
const OurPartners = () => {
    return (
      <>
        <section id="partners" className="py-10 md:py-20 lg:py-28 ">
          <div className="container">
            <SectionTitle
              title="Friends We Shared Success With"
              paragraph="Those who have shared with us every shred of success"
              center
            />
            <HeadCategory title='Show there are brands' btnTitle='More' pathText='/partners'  />
  
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