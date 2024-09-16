import { useLocale } from "next-intl";
import React, { memo } from "react";

type HeadingProps = {
  children?: React.ReactNode;
  titleEn: string; // English title
  titleAr: string; // Arabic title
};

// eslint-disable-next-line react/display-name
const PartnerHeader = memo(({ children, titleEn, titleAr }: HeadingProps) => {
  // Select the title based on the locale
  const locale = useLocale();

  const title = locale === "ar" ? titleAr : titleEn;

  return (
    <div className="mb-3 text-[26px] flex justify-center gap-3 py-3">
      <span className=" border-2 border-blue-500 dark:border-[#F6AA02] rounded-lg"></span>
      <h2
        className={`text-blue-950 dark:text-white text-[0.6rem] md:text-[0.9rem] lg:text-xl ${locale === "ar" ? "__rtl_lang font-semibold" : ""}`}
      >
        {title}
      </h2>
      {children && <div>{children}</div>}
    </div>
  );
});

export default PartnerHeader;
