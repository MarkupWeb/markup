import Image from "next/image";
import React from "react";

interface Brand {
  [x: string]: any;
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  // Any other fields
}

interface BrandListProps {
  brandList: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({ brandList }) => {
  return (
    <div>
      {brandList.map((item, index) => (
        <div className="" key={item.attributes.title}>
          <h1 className="">{item.attributes.title}</h1>
          <h1 className="">{item.attributes.description[0].children[0].text}</h1>
          <Image
            src={item.attributes.image.data.attributes.url}
            alt="news-img"
            width={166}
            height={166}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandList;
