import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PartnersData from "@/components/Markup-Sections/Partenrs/PartnersData";
import { useTranslations, useLocale } from "next-intl";
import NextArrow from "@/components/Markup-Sections/Partenrs/NextArrow";
import PrevArrow from "@/components/Markup-Sections/Partenrs/PrevArrow";

type SliderListProps<T> = {
  records?: T[];
  renderItem: (itemData: T) => React.ReactNode;
};

type HasId = { id?: number };

const SliderList = <T extends HasId>({
  records = [],
  renderItem,
}: SliderListProps<T>) => {
  // Content translation
  const t = useTranslations("Partners");
  const PartnersContent = records.length > 0 ? records : PartnersData(t);
  // 
  const local = useLocale();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    // centerMode: true,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const CategoryRender =
    PartnersContent.length > 0 ? (
      PartnersContent.map((itemData) => (
        <div className=""
          key={itemData.id}
        >
          {renderItem(itemData)}
        </div>
      ))
    ) : (
      <h4>There is no data</h4>
    );

  return <Slider {...settings}>{CategoryRender}</Slider>;
};

export default SliderList;
