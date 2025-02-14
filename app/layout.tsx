import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const geist = localFont({
  src: "/fonts/Geist-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ehsan Mosaddeghi",
  description: "Personal website of Ehsan Mosaddeghi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased flex flex-col min-h-svh text-text bg-secondary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 bg-background">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
