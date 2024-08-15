"use client";

import { ThemeProvider } from "next-themes";

export function ProvidersTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="className" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
