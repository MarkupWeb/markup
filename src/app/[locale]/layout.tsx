import "react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // Ensure this is the correct import
import { ReactNode } from "react";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { ProvidersTheme } from "../Providers/ThemeProvider";
import Footer from "@/components/Common/Footer";
import WhatsUpLink from "@/components/UI-Testing/WhatsUpLink/WhatsUpLink";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string }; // Ensure locale is a string
};

// Metadata for English and Arabic
const metadataContent = {
  en: {
    title: "Markup - Marketing Agency",
    description: "Marketing for restaurants and business solutions, media buying, and marketing plans.",
    keywords: [
      "markup agency",
      "markup marketing",
      "markup business",
      "markup business solutions",
      "restaurant marketing"
    ],
    openGraph: {
      description: "Markup agency, Marketing for Restaurants and Business Solutions, Marketing Plans, Media Buyer"
    },
    canonical: "https://markup.vip/en",
  },
  ar: {
    title: "Markup - Marketing Agency",
    description: "التسويق للمطاعم والحلول التجارية ، وشراء وسائل الإعلام وخطط التسويق.",
    keywords: [
      "وكالة مارك أب",
      "التسويق",
      "الحلول التجارية",
      "التسويق للمطاعم"
    ],
    openGraph: {
      description: "وكالة مارك أب، التسويق للمطاعم والحلول التجارية، وخطط التسويق"
    },
    canonical: "https://markup.vip/ar",
  }
};

// Exported metadata to dynamically switch based on locale
export const metadata: Metadata = {
  metadataBase: new URL("https://markup.vip"),
  title: {
    default: "Markup",
    template: "%s | Markup",
  },
  openGraph: {
    description: "Marketing for restaurants and business solutions, media buying, and marketing plans.",
  },
  icons: {
    icon: "/icons/icon-markup.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = params; // Destructure locale from params
  const messages = await getMessages({ locale }); // Pass locale as an object
  const dir = locale === "ar" ? "rtl" : "ltr";
  const metadataLocale = locale === "ar" ? metadataContent.ar : metadataContent.en;

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Dynamic Metadata */}
        <title>{metadataLocale.title}</title>
        <meta name="description" content={metadataLocale.description} />
        <meta name="keywords" content={metadataLocale.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={metadataLocale.canonical} />
        <meta property="og:description" content={metadataLocale.openGraph.description} />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ProvidersTheme>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className={`${locale === "ar" ? "__rtl_lang" : ""}`}>
              {children}
            </main>
            <Footer />
            
            
          </NextIntlClientProvider>
          <WhatsUpLink />
          <ScrollToTop />
        </ProvidersTheme>
      </body>

    </html>
  );
}
