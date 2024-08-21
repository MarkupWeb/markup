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
  
            <div className="pb-20 flex flex-col gap-10">
              <PartnersCategory />
              <PartnersCategory />
              <PartnersCategory />
              
              
              
            </div>

            <div className="bg-slate-800 flex flex-col justify-center py-20 gap-8 rounded-md">
              <h1 className="text-center text-white text-[2.5rem] tracking-wide font-thin  ">
              LET’S START <span className="text-orange-400 font-medium">YOUR PROJECT</span>
              </h1>

              <div className="  flex items-center justify-center">
              <button className="bg-none border-[1px] border-blue-500  text-white px-8 py-3 rounded-3xl hover:bg-blue-500">CONECT US</button>

              </div>

            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default OurPartners;