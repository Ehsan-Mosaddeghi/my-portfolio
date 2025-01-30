import type { Metadata } from "next";
import localFont from "next/font/local";
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
    <html lang="en">
      <body className={`${geist.className}  antialiased flex flex-col min-h-svh`}>
        <Navbar />
        <main className="flex-1 bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
