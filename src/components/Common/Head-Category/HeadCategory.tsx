import { Link } from "@/navigation";
import "./headCategory.css";
import { HiChevronRight } from "react-icons/hi2";
import { useLocale } from "next-intl";
import Image from "next/image";
import { HiPaperAirplane } from "react-icons/hi2";


import head_icon from "../../../../public/icons/head_icon.svg";

interface SubTitlesProps {
  title?: string;
  btnTitle?: string; // Optional
  pathText: string;
}

const HeadCategory: React.FC<SubTitlesProps> = ({
  title,
  btnTitle,
  pathText,
}) => {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-2">
        
      <div className=" flex items-center justify-center   w-[20px] md:w-[25px] lg:w-[30px]  cursor-pointer">
          <Image
            className="w-[60px] md:w-[80px] lg:w-[50px]zz"
            src={head_icon}
            alt={"head-icon"}
            width={0}
            height={0}
          />
        </div>
          
    
        <h2 className="text-blueMain  dark:text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
          {title}
        </h2>
      </div>
      {btnTitle && (
        <Link href={pathText} aria-label={btnTitle}>
          <div
            dir={dir}
            className={`group flex items-center gap-1 bg-slate-800  hover:bg-[#F6AA02] text-[12px] px-2 py-1 rounded-lg shadow-lg text-white transition-all duration-300`}
          >
            {btnTitle}
            <HiChevronRight
              className={`transition-transform duration-300  ${locale === "ar" ? "group-hover:-translate-x-1 rotate-180 " : "group-hover:translate-x-1"}`}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default HeadCategory;
