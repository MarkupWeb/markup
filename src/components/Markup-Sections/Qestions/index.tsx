"use client";
import Lottie from "lottie-react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import SingleFeature from "./SingleFeature";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import questionImg from "../../../../public/lotyFiles/question3.json";
import questionsData from "./QuestionsData";

import HeadCategory from "@/components/Common/Head-Category/HeadCategory";
import { useLocale, useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("Questions");
  const questionsContent = questionsData(t);
  const local = useLocale();

  return (
    <section id="features" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900">
      <div className="container">
        <SectionTitle
          titleEn="Questions Always Looking For"
          titleAr="الاسئله التلي تبحث عنها دائما"
          paragraphEn="Most important and related FQA’s that might cross your mind"
          paragraphAr="الأهم والأكثر صلة من FQA التي قد تخطر ببالك"
          center
        />

        <div className="mb-7 px-3">
          <HeadCategory 
            title_en='All Questions' 
            title_ar='جميع الاسئله' 
            btnTitle_en='More' 
            btnTitle_ar='المزيد' 
            pathText='/questions'  
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            {questionsContent.map((item) => (
              <div
                className="border-[1px] bg-white dark:bg-slate-800 border-orange-400 hover:border-blue-600 mx-auto mb-5 w-full max-w-5xl rounded-2xl px-6 py-2 md:py-4 shadow-md transition-colors"
                key={item.id}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-offwhite flex w-full justify-between rounded-lg text-left font-medium sm:px-4 sm:py-2 text-[14px] md:text-[15px]">
                        <span>{item.question}</span>
                        <ChevronUpIcon
                          className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-bluish px-4 pb-2 pt-4 font-normal opacity-50 md:text-sm">
                        {item.answer1 || ""}
                        <br />
                        {item.answer2 || ""}
                        <br />
                        {item.answer3 || ""}
                        <br />
                        {item.answer4 || ""}
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
  );
};

export default Features;
