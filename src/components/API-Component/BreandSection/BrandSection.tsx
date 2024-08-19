"use client";

import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";
import BrandList from "./BrandList";
import BrandApis from "@/Utils/BrandApis";

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  // Any other fields
}

const BrandSection: React.FC = () => {

    const [brandList, setBrandList] = useState<Brand[]>([]);

    useEffect(() => {
        getLatestBrand_();
    }, []);

    const getLatestBrand_ = () => {
        BrandApis.getLatestBrand().then(res => {
            console.log(res.data.data);
            setBrandList(res.data.data);
        });
    };

    return (
    <section id="news" className="">
      <div className="container">
        <SectionTitle
          title="API Brand"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <BrandList brandList={brandList} />
      </div>
    </section>
  );
};

export default BrandSection;
