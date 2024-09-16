import { useLocale } from 'next-intl';
import Image from 'next/image';
import React, { memo } from 'react';
import head_icon from "../../../../public/icons/head_icon.svg";

type HeadingProps = {
  children?: React.ReactNode;
  titleEn: string;
  titleAr: string;
};

// eslint-disable-next-line react/display-name
const PartnerHeader = memo(({ children, titleEn, titleAr }: HeadingProps) => {
  const locale = useLocale();
  const title = locale === 'ar' ? titleAr : titleEn;

  return (
    <div className="mb-3 text-[26px] flex items-center justify-center gap-3 py-3">
      <div className="flex items-center justify-center w-[30px] md:w-[35px] lg:w-[40px] cursor-pointer">
        <Image
          className="w-[60px] md:w-[80px] lg:w-[50px] animate-spin-slow animate-color-change"
          src={head_icon}
          alt="head-icon"
          width={40}
          height={40}
        />
      </div>
      <h2 className={`text-blue-950 dark:text-white text-[0.6rem] md:text-[0.9rem] lg:text-xl ${locale === "ar" ? "__rtl_lang font-semibold" : ""}`}>
        {title}
      </h2>
      {children && <div>{children}</div>}
    </div>
  );
});

export default PartnerHeader;
