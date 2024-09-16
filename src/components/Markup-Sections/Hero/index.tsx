"use client";

import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg from "../../../../public/images/hero/banner1-2.png";
import DealImg2 from "../../../../public/lotyFiles/hero.json";
import { HiOutlinePhone } from "react-icons/hi2";
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import Lottie from "lottie-react";
import videoClick from "../../../../public/lotyFiles/videoClick.json";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  // Content translation
  const t = useTranslations("Hero");
  const heroContent = heroData(t);

  const local = useLocale();

  // pop Up Contect

  let [isOpens, setIsOpens] = useState(false);

  return (
    <>
      <section
        id="home"
        className={`bg-[#F5F5F5] relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="hjnQfaml14s"
          onClose={() => setOpen(false)}
        />

        <div className="container">
          <div className="">
            <div className="">
              <div
                className={`grid grid-cols-1 xl:grid-cols-2 lg:gap-[8rem]  items-center  ${local === "ar" ? "__rtl_lang" : ""}`}
              >
                <div className="">
                  {heroContent.length >= 1
                    ? heroContent.map((item) => (
                        <div className="" key={item.id}>
                          <h1
                            className={`mb-5 overflow-hidden text-[1rem] font-bold leading-tight text-blue-900 dark:text-white sm:text-[1.4rem] sm:leading-tight md:text-[1.5rem] md:leading-tight ${
                              local === "ar" ? "" : ""
                            }  `}
                          >
                            {item.title}{" "}
                            <span className="text-[#F6AA02]   ">
                              {/* Style will be inherited from the parent element */}
                              <Typewriter
                                words={
                                  local === "ar"
                                    ? ["سهله", "ذكيه", "امنه"]
                                    : ["Effective", "Fun"]
                                }
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                            </span>
                          </h1>

                          <p className="mb-8 text-[10px] !leading-relaxed text-body-color dark:text-body-color-dark sm:text[12px] md:text-sm lg::text-md">
                            {item.description}
                          </p>

                          <div className="flex items-center">
                            <Link
                              href="https://wa.me/+201000936297"
                              target="_blank"
                              className="mr-4 flex   items-center gap-4  rounded-3xl border-2 border-orange-400    px-6 py-2.5 font-semibold text-black hover:bg-orange-400 hover:text-white dark:text-white lg:px-8 lg:py-4"
                            >
                              <span className="text-[11px] sm:text-[12px] md:text[14px] ">
                                {item.btnTitle1}
                              </span>
                              <span className="scale-x transform text-[20px]">
                                <HiOutlinePhone />
                              </span>
                            </Link>

                            <button
                              onClick={() => setOpen(true)}
                              className="flex items-center justify-center  text-slate-800 dark:text-white"
                            >
                              <span className="w-[60px] lg:w-[70px] ">
                                <Lottie animationData={videoClick} />
                              </span>

                              {item.btnTitle2}
                            </button>
                          </div>
                        </div>
                      ))
                    : "ther is no content data "}
                </div>

                <div className="px-10 pb-10 w-[20rem] md:w-[30rem]">
                 <Lottie animationData={DealImg2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
