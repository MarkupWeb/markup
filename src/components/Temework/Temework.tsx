"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi2";



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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 4000,
    nextArrow: true,
    prevArrow: true,
    autoplaySpeed: 4500,
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 530,
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
      <section id="temework" className="md:py-15 lg:py-18 py-5  bg-sky-50 dark:bg-transparent">
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
                  <div className="m-3 py-14 text-center md:my-10">
                    <div className="relative ">
                      <Image
                        src={items.imgSrc}
                        alt="user-image"
                        width={306}
                        height={0}
                        className="m-auto inline-block"
                      />
                      <div className="absolute bottom-[102px] right-[84px] rounded-full bg-white p-4">
                        <Image
                          src="/icons/icon-markup.png"
                          alt="linkedin-image"
                          width={25}
                          height={24}
                        />
                      </div>
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
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Temework;
