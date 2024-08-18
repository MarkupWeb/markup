import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import React from 'react'
import PopularPartners from './PopularPartners/PopluarPartners';
import PartnersCategory from './Partners/PartnersCategory';
import PopularPartnerRTL from './PopularPartners/PopularPartnerRTL';
import Popluar from './PopularPartners';
const OurPartners = () => {
    return (
      <>
        <section id="partners" className="py-10 md:py-20 lg:py-28 ">
          <div className="container">
            <SectionTitle
              title="Our Partners"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
  
            <div className="pb-20">
              <Popluar />
              <PartnersCategory />
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default OurPartners;