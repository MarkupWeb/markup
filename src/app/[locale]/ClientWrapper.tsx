"use client";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { Providers } from "./providers";
import { ProvidersTheme } from "./ThemeProvider";

interface ClientWrapperProps {
  children: React.ReactNode;
  locale: string;
}

export default function ClientWrapper({ children, locale }: ClientWrapperProps) {
  return (
    <ProvidersTheme>
      <Providers locale={locale}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </Providers>
    </ProvidersTheme>
  );
}
