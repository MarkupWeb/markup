import React from "react";
import Popular from "./Popular";
import MainPartenrs from "./MainPartenrs";
import SectionTitle from "../Common/SectionTitle";

const OurPartners = () => {
  return (
    <>
      <section id="partners" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Partners"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="pb-20">
            <Popular />
            <MainPartenrs />
          </div>


        </div>
      </section>
    </>
  );
};

export default OurPartners;
