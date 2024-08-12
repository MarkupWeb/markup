"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "next-intl";
import NextArrow from "@/components/Logic-List/MultipleSlider/SliderArrows/NextArrow";
import PrevArrow from "@/components/Logic-List/MultipleSlider/SliderArrows/PrevArrow";

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

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 5,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 6,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 7,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 9,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  const local = useLocale();

  return (
    <section className="bg-bg-color-dark dar:bg-gray-light relative z-10 py-16 md:py-20 lg:py-28 text-white">
      <div className="container">
        <div className=" text-center mb-10">
          <h1 className="text-[3rem] ">Testimonials</h1>
          <h3 className="text-md mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, ad.
          </h3>
        </div>

        <Slider {...settings}>
          {testimonialData.map((item) => (
            <div key={item.id} className="">
              <div
                className={`flex items-center  w-[230px]  h-[270px] lg:w-[290px]  mx-auto  hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400  my-6 ${local === "ar" ? "__rtl_lang  " : ""}`}
              >
                <div className="m-3 py-16 text-center md:my-10">
                  <div className="relative group ">
                    <div className="absolute transition rounded-lg  opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
                    <Link href="/" className="cursor-pointer">
                      <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.image}
                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt={item.name}
                            width={12}
                            height={12}
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {item.name}
                            </h3>
                            <p className="text-gray-500 text-md">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">
                          {item.content}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
