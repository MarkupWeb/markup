"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: "/images/Partnars_Logos/01.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/02.png",
  },
  

  {
    imgSrc: "/images/Partnars_Logos/04.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/05.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/06.png",
  },
  
  {
    imgSrc: "/images/Partnars_Logos/08.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/09.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/10.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/11.png",
  },

  {
    imgSrc: "/images/Partnars_Logos/12.png",
  },
  {
    imgSrc: "/images/Partnars_Logos/13.png",
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section id="partners" className="">
        

          <div className="px-4s mx-auto max-w-2xl py-16 sm:px-6 lg:max-w-7xl ">
            <div>
              <Slider {...settings}>
               
                {data.map((item, i) => (
                  <div className="" key={i}>
                    <Image src={item.imgSrc} alt={item.imgSrc} width={125} height={125} />
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
