"use client";
import Lottie from "lottie-react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import SingleFeature from "./SingleFeature";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import questionImg from "../../../../public/lotyFiles/question3.json";

import Image from "next/image";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. What is cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    heading: "2. Can cryptocurrency be converted to cash?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
  {
    heading: "3. How long should you hold cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },

  {
    heading: "4. How long should you hold cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5]  dark:bg-gray-dark">
        <div className="container">
          <SectionTitle
            titleEn="Questions Always Looking For"
            titleAr="الاسئله التلي تبحث عنها دائما"
            paragraphEn="Most important and related FQA’s  that might cross your mind"
            paragraphAr="الأهم والأكثر صلة من FQA التي قد تخطر ببالك"
            center
          />

          <div className="mb-7 px-3">
          <HeadCategory title_en='All Questionsers' title_ar='جميع الاسئله' btnTitle_en='More' btnTitle_ar='المزيد' pathText='/questions'  />

          </div>

          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              {faqdata.map((items, i) => (
                <div
                  className="border-[1px] bg-white dark:bg-slate-800  border-orange-400 hover:border-blue-600  mx-auto mb-5 w-full max-w-5xl rounded-2xl px-6 py-2 md:py-4  shadow-md transition-colors"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="text-offwhite  flex w-full justify-between rounded-lg text-left font-medium sm:px-4 sm:py-2 text-[14px] md:text-[15px]">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-blue-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-bluish px-4 pb-2 pt-4 font-normal opacity-50 md:text-sm">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <span className="w-[350px] lg:w-[350px]">
                <Lottie animationData={questionImg} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
