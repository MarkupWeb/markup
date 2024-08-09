"use client";

import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg from "../../../public/images/hero/banner1-2.png";
import { HiOutlinePhone } from "react-icons/hi2";
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import Lottie from "lottie-react";
import videoClick from "../../../public/lotyFiles/videoClick.json";
import { Dialog } from "@headlessui/react";
import NewsLatterBox from "../Contact/NewsLatterBox";
import { HiXMark } from "react-icons/hi2";

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
        className={`relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="hjnQfaml14s"
          onClose={() => setOpen(false)}
        />

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className={`grid grid-cols-1 gap-8 xl:grid-cols-2 ${local === "ar" ? "__rtl_lang" : ""}`}
              >
                {heroContent.length >= 1
                  ? heroContent.map((item) => (
                      <div className="" key={item.id}>
                        <h1
                          className={`mb-5 overflow-hidden text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight ${
                            local === "ar"
                              ? ""
                              : "text-[1.5rem] md:text[1.7rem] lg:text[2rem]"
                          }  `}
                        >
                          {item.title}{" "}
                          <span className="text-orange-400   ">
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                              words={
                                local === "ar"
                                  ? ["سهله", "ذكيه", "امنه"]
                                  : ["Easy", "Smart", "Safe"]
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

                        <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                          {item.description}
                        </p>

                        <div className="flex items-center">
                          
                            <Dialog
                              open={isOpens}
                              onClose={() => setIsOpens(false)}
                              className="relative z-50"
                            >
                              {/* The backdrop, rendered as a fixed sibling to the panel container */}
                              <div
                                className="fixed inset-0 bg-black/30 dark:bg-white/30"
                                aria-hidden="true"
                              />

                              {/* Full-screen scrollable container */}
                              <div className="fixed inset-0 w-screen overflow-y-auto">
                                {/* Container to center the panel */}
                                <div className="flex min-h-full items-center justify-center p-4">
                                  {/* The actual dialog panel  */}
                                  
                                  <Dialog.Panel className="mx-auto max-w-sm rounded bg-black">
                                  <div className="bg-black py-3 mx-4 flex justify-end">
                                    
                                    <span className=" text-center bg-[#7c7c7c] cursor-pointer rounded-lg w-[30px] h-[30px]"
                                    onClick={() => setIsOpens(false)}
                                    >X</span>

                                  </div>
                                    <NewsLatterBox />
                                  </Dialog.Panel>
                                </div>
                              </div>
                            </Dialog>

                            <button
                              className="text-[12px] md:text[14px] lg:text-[16px] mr-6 flex   items-center gap-4  rounded-3xl border-2 border-orange-400    px-6 py-2.5 font-semibold text-black hover:bg-orange-400 hover:text-white dark:text-white lg:px-12 lg:py-4"
                              onClick={() => setIsOpens(true)}
                            >
                              <span className="">{item.btnTitle1}</span>
                              <span className="scale-x transform text-[20px]">
                                <HiOutlinePhone />
                              </span>
                            </button>
                          

                          <button
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-center  text-slate-800 dark:text-white"
                          >
                            <span className="w-[70px] ">
                              <Lottie animationData={videoClick} />
                            </span>

                            {item.btnTitle2}
                          </button>
                        </div>
                      </div>
                    ))
                  : "ther is no content data "}

                <div className="">
                  <Image
                    src={DealImg}
                    alt="deal-image"
                    className=" bg-tramsparent w-auto dark:bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
