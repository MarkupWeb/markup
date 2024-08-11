"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Img01 from "../../../../public/images/Partnars_Logos/01-saltaoon.png";
import Img02 from "../../../../public/images/Partnars_Logos/02-nos-dasta.png";
import Img03 from "../../../../public/images/Partnars_Logos/03-baheya.png";
import Img04 from "../../../../public/images/Partnars_Logos/04-dokan-fteer.png";
import Img05 from "../../../../public/images/Partnars_Logos/05-kbsha.png";
import Img06 from "../../../../public/images/Partnars_Logos/06-bonoh.png";
import Img08 from "../../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png";
import Img09 from "../../../../public/images/Partnars_Logos/08-hamam-abdo.png";
import Img10 from "../../../../public/images/Partnars_Logos/09-mshakeek.png";
import Img11 from "../../../../public/images/Partnars_Logos/10-basha.png";
import Img12 from "../../../../public/images/Partnars_Logos/11-chicken-planet.png";
import Img13 from "../../../../public/images/Partnars_Logos/12-chicken-fila.png";
import Img14 from "../../../../public/images/Partnars_Logos/13-xlarge.png";
import Img15 from "../../../../public/images/Partnars_Logos/14-adrenaleen.png";
import Img16 from "../../../../public/images/Partnars_Logos/15-cairo-guys.png";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: any;
}

const data: Data[] = [
  {
    imgSrc: Img01,
  },
  {
    imgSrc: Img02,
  },

  {
    imgSrc: Img03,
  },
  {
    imgSrc: Img04,
  },
  {
    imgSrc: Img05,
  },

  {
    imgSrc: Img06,
  },
  {
    imgSrc: Img08,
  },
  {
    imgSrc: Img09,
  },

  {
    imgSrc: Img10,
  },
  {
    imgSrc: Img11,
  },

  {
    imgSrc: Img12,
  },
  {
    imgSrc: Img13,
  },
  {
    imgSrc: Img14,
  },
  {
    imgSrc: Img15,
  },
  {
    imgSrc: Img16,
  },
];

const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="">
        <div className="px-4s mx-auto max-w-2xl py-16 sm:px-6 lg:max-w-7xl ">
          <div>
            <Slider {...settings}>
              {data.map((item, i) => (
                <div className="" key={i}>
                  <div className="bg-white flex justify-center  dark:bg-slate-800 text-center rounded-full w-[70px] md:w-[90] lg:w-[110px] ">
                    <Image
                      className="w-[60px] md:w-[80px] lg:w-[100px]"
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
