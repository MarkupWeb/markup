"use client";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { Providers } from "./providers";
import { ProvidersTheme } from "./ThemeProvider";

interface ClientWrapperProps {
  children: React.ReactNode;
  locale: string;
  dir?: string;
}



export default function ClientWrapper({ children, locale, dir }: ClientWrapperProps) {
  return (
    <ProvidersTheme>
      <Providers locale={locale}>
        <Header />
        <div className="" dir={dir}>

        {children}
        </div>
        <Footer />
        <ScrollToTop />
      </Providers>
    </ProvidersTheme>
  );
}