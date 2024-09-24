import "react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
  params: { locale: string };
};

// Metadata for English and Arabic
const metadataContent = {
  en: {
    title: "Markup - Marketing Agency",
    description: "Marketing for restaurants and business solutions, media buying, and marketing plans.",
    keywords: [
      "markup agency",
      "markup marketing",
      "markup business solutions",
      "restaurant marketing"
    ],
    openGraph: {
      description: "Markup agency, Marketing for Restaurants and Business Solutions, Marketing Plans, Media Buyer",
      image: "/images/og-image-en.jpg",
    },
    canonical: "https://markup.vip/en",
  },
  ar: {
    title:"Markup - Marketing Agency",
    description: "التسويق للمطاعم والحلول التجارية ، وشراء وسائل الإعلام وخطط التسويق.",
    keywords: [
      "وكالة مارك أب",
      "التسويق",
      "الحلول التجارية",
      "التسويق للمطاعم"
    ],
    openGraph: {
      description: "وكالة مارك أب، التسويق للمطاعم والحلول التجارية، وخطط التسويق",
      image: "/images/og-image-ar.jpg",
    },
    canonical: "https://markup.vip/ar",
  }
};

// Dynamic SEO metadata
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
  const { locale } = params;
  const messages = await getMessages({ locale });
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

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadataLocale.title} />
        <meta property="og:description" content={metadataLocale.openGraph.description} />
        <meta property="og:url" content={metadataLocale.canonical} />
        <meta property="og:image" content={metadataLocale.openGraph.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadataLocale.title} />
        <meta name="twitter:description" content={metadataLocale.description} />
        <meta name="twitter:image" content={metadataLocale.openGraph.image} />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: metadataLocale.title,
              url: metadataLocale.canonical,
              logo: "/images/logo.png",
              sameAs: [
                "https://www.facebook.com/markup4Marketing/",
                "https://www.instagram.com/markup4marketing?igsh=MTZxZzd0cXdwMXRzMQ==",
              ],
            }),
          }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ProvidersTheme>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className={`${locale === "ar" ? "__rtl_lang" : ""}`}>
              {children}
            </main>
            <Footer />
            <WhatsUpLink />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ProvidersTheme>
      </body>
    </html>
  );
}
