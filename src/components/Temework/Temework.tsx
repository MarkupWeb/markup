"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi2";
import NextArrow from "../Partenrs/NextArrow";
import PrevArrow from "../Partenrs/PrevArrow";
import { useLocale } from "next-intl";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user3.png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user2.png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user1.png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user3.png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user2.png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user1.png",
  },
];

const Temework = () => {
  const local = useLocale();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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

  return (
    <>
      <section
        id="temework"
        className="md:py-15 lg:py-20 py-5  bg-sky-50 dark:bg-transparent"
      >
        <div className="container">
          <SectionTitle
            title="Temework"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="relative mx-auto max-w-2xl px-4 sm:py-4 lg:max-w-7xl lg:px-8">
            <h2 className="lh-82 text-midnightblue md:text-55xl text-center text-4xl font-semibold md:text-start">
              Meet with our <br /> mentor.
            </h2>

            <Slider {...settings}>
              {postData.map((items, i) => (
                <div key={i}>
                  <div
                    className={`flex items-center gap-3 w-[340px] grayscale hover:grayscale-0 h-[380px] shadow-xl group mx-3 my-2  rounded-3xl  px-3  cursor-pointer text-gray-400   bg-slate-800 hover:bg-white dark:hover:bg-white hover:text-black  p-8  duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}`}
                  >
                    
                      <div className="m-3 py-14 text-center md:my-10">
                        <div className="relative ">
                          <Image
                            src={items.imgSrc}
                            alt="user-image"
                            width={306}
                            height={0}
                            className="m-auto inline-block "
                          />
                          
                        </div>
                        <div className="-mt-10">
                          <h3 className="text-lightblack text-2xl font-semibold">
                            {items.name}
                          </h3>
                          <h4 className="text-lightblack pt-2 text-lg font-normal opacity-50">
                            {items.profession}
                          </h4>
                        </div>
                      </div>
                      
                    
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

export default Temework;
