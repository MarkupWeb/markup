import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Header from "@/components/Common/Header";
import { Footer } from "flowbite-react";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { ProvidersTheme } from "./Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>

        <ProvidersTheme>
        
        
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>

        </ProvidersTheme>
        
      </body>
    </html>
  );
}
