import { Metadata } from "next";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl'; // لاستخدام الترجمة للمحتوى

// تحديد البيانات الوصفية بناءً على اللغة
export const metadata = ({ params }: { params: { locale: string } }): Metadata => {
  const { locale } = params;

  return {
    title: locale === 'ar' ? "ماركوب - حلول التسويق والأعمال" : "Markup - Marketing and Business Solutions",
    description: locale === 'ar' ? "ماركوب تقدم حلول تسويق وأعمال مبتكرة للشركات." : "Markup provides innovative marketing and business solutions for companies.",
    icons: {
      icon: "/icons/icon-markup.png",
    },
    openGraph: {
      title: locale === 'ar' ? "ماركوب" : "Markup",
      description: locale === 'ar' ? "حلول التسويق والأعمال" : "Marketing and business solutions",
      url: locale === 'ar' ? "https://yourwebsite.com/ar" : "https://yourwebsite.com/en",
      siteName: "Markup", 
    },
    alternates: {
      canonical: locale === 'ar' ? "https://yourwebsite.com/ar" : "https://yourwebsite.com/en",
      languages: {
        'en': 'https://yourwebsite.com/en',
        'ar': 'https://yourwebsite.com/ar',
      },
    },
  };
};
