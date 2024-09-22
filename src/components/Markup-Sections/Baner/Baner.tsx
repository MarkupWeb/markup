import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import obasty from "../../../../public/Patterns/patern-3.png";

interface BannerProps {
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;
}

const BannerData: BannerProps[] = [
  {
    titleEn: "Transform Your Business into a Market Leader with Our Winning Strategies",
    titleAr: "حوّل عملك إلى قائد في السوق مع استراتيجياتنا المجربه",
    subtitleEn: "Unlock your brand’s full potential with innovative strategies, local expertise, and data-driven campaigns that connect you with your audience and drive growth.",
    subtitleAr: "اكتشف الإمكانيات الكاملة لعلامتك التجارية من خلال استراتيجيات مبتكرة وخبرة محلية وحملات تعتمد على البيانات لربطك بجمهورك وتحقيق النمو .",
  },
];

const Baner = () => {
  const local = useLocale();

  return (
    <div className="bg-white relative z-10 dark:bg-slate-900 shadow-md  py-10 lg:py-20 gap-8   text-center">
      <div className="container">
      <div className={`absolute  top-14 z-[-1] ${local === 'ar' ? 'left-0' : 'right-0'}`}>
          <Image
            src={obasty}
            alt="user-image"
            width={0}
            height={0}
            className="m-auto inline-block w-[100px] md:w-[500px] text-blue-500"
          />
        </div>

        {BannerData.map((item, index) => (
          <div className="" key={index}>
            
            <h1 className={`text-center text-blueMain dark:text-white   tracking-wide  mb-4 ${local === "ar" ? "font-thin text-[1.4rem] lg:text-[2.5rem] " : " text-[0.9rem] lg:text-[1.8rem]"}`}>
            {local === "en" ? item.titleEn : item.titleAr}
            </h1>
            <p className={`pb-8 text-orangeMain  font-semibold ${local === "ar" ? "text-sm" : " text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] "} `}>
              {local === "en" ? item.subtitleEn : item.subtitleAr}
            </p>
          </div>
        ))}



        <Link
          href="https://wa.me/+201000936297"
          className=" flex items-center justify-center"
          target="_blank"
        >
          <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110   active:animate-bounce shadow-2xl shadow-blue-800 dark:shadow-blue-500">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] "></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white hover:text-gray-300 backdrop-blur-3xl gap-2 undefined">
            {local === "en" ? "Contact Us" : "تواصل معنا"}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0" // Updated to camelCase
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
              </svg>
            </span>
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Baner;
