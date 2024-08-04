"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Providers } from "./providers";

import { ProvidersTheme } from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale}>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
      <ProvidersTheme>
        <Providers locale={locale}>
          
            <Header />

            <div dir={dir}>
              {children}
            </div>

            <Footer />
            <ScrollToTop />
          
        </Providers>
        </ProvidersTheme>
      </body>
    </html>
  );
}
