import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import { Montserrat_Alternates, Montserrat } from "next/font/google";
import NewsletterSubscribe from "./components/Apis/NewsletterSubscribe";
import dynamic from "next/dynamic";
import Contacto from "./components/Contacto";
import { Metadata } from "next"
import Redes from "./components/Redes";
const News = dynamic(() => import("./components/Redes"), { ssr: false });
const GoogleAds = dynamic(() => import("./components/GoogleAds"), {
  ssr: false,
});
const montserrat_alternates = Montserrat_Alternates({
  variable: "--title-font",
  weight: "700",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--body-font",
  weight: "400",
  preload: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abelardo Blog",
  keywords: "Blog",
  creator: "Sebastian Burgos",
  description: "Abelardo-blog",
  icons: {
    icon: "/abelardo-blog.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={` ${montserrat_alternates.variable} ${montserrat.variable} font-body`}
      lang="es-ES"
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692046911486022"
          crossOrigin="anonymous"
        ></script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.GA_TRACKING_ID as string}
        />
      </head>
      <body className="bg-slate-800">
        <Navbar />
        <main className="px-4  md:px-6 prose-slate dark:prose-invert  w-full 2xl:w-6/12 mx-auto">
        {children}
        </main>
        <Redes />
        <Contacto />
        <NewsletterSubscribe />
        <Footer />
      </body>
    </html>
  );
}
