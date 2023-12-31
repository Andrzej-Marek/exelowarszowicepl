import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "@/css/animate.css";
import "@/css/jquery-ui.css";
import "@/css/magnific-popup.css";
import "@/css/odometer.css";
import "@/css/style.css";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";
import FacebookPixel from "@/lib/FacebookPixel";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CDTGQFP7XH" />
      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-CDTGQFP7XH')
        `}
      </Script>

      <body className={inter.className}>
        <Header />
        <div className="page_wrapper">{children}</div>
        <Footer />

        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
      </body>
    </html>
  );
}
