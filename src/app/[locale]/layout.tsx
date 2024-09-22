import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { ProvidersTheme } from "../Providers/ThemeProvider";
import Footer from "@/components/Common/Footer";
import { Metadata } from "next";
import WhatsUpLink from "@/components/UI-Testing/WhatsUpLink/WhatsUpLink";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  metadataBase: new URL("https://markup.vip"),
  keywords: [
    "markup agency",
    "markup marketing",
    "markup business",
    "markup business solutions",
    "markup restaurant marketing"
  ],
  title: {
    default: "markup",
    template: "%s | markup"
  },
  openGraph: {
    description: "Markup agency, Marketing for Restaurants and Business Solutions, Marketing Plans, Media Buyer"
  },
  icons: {
    icon: "/icons/icon-markup.png", // Ensure this path is correct
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr"; // Fixed extra space

  return (
    <html lang={locale}>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ProvidersTheme>
          <NextIntlClientProvider messages={messages}>
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
