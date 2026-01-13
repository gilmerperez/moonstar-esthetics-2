import "../styles/globals.css";
import Script from "next/script";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat, Libre_Baskerville } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata = {
  title: "Moonstar Esthetics | Professional Skincare & Beauty Services",
  description:
    "Moonstar Esthetics offers professional skincare, IPL laser hair removal, and waxing services. Book your appointment today for radiant, healthy skin.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${montserrat.variable} ${libreBaskerville.variable}`}>
        <body>
          <Script src="https://kit.fontawesome.com/ffb8948ab7.js" crossOrigin="anonymous" strategy="afterInteractive" />
          <Header />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </>
  );
}
