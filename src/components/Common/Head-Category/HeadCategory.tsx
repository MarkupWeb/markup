import { Link } from "@/navigation";
import "./headCategory.css";
import { HiChevronRight } from "react-icons/hi2";
import { useLocale } from "next-intl";

interface SubTitlesProps {
  title: string;
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
        <span className="border-2 h-7 border-[#F6AA02] shadow-2xl dark:border-[#F6AA02] rounded-lg"></span>
        <h2 className="text-[#013D90]  dark:text-white text-[16px] font-semibold">{title}</h2>
      </div>
      {btnTitle && (
        <Link
          href={pathText}
          aria-label={btnTitle}
        >
          <div dir={dir} className={`group flex items-center gap-1 bg-slate-800  hover:bg-[#F6AA02] text-[12px] px-2 py-1 rounded-lg shadow-lg text-white transition-all duration-300`}>
            {btnTitle}
            <HiChevronRight  className={`transition-transform duration-300  ${locale === "ar" ? "group-hover:-translate-x-1 rotate-180 " : "group-hover:translate-x-1"}`} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default HeadCategory;


