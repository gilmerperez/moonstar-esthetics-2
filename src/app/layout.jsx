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
  title: {
    default: "Moonstar Esthetics | Professional Skincare & Beauty Services",
    template: "%s | Moonstar Esthetics",
  },
  description:
    "Moonstar Esthetics offers professional skincare, IPL laser hair removal, and waxing services in Orlando, FL. Experience personalized facials, LED light therapy, dermaplaning, and expert esthetician care. Book your appointment today for radiant, healthy skin.",
  keywords: [
    "Moonstar Esthetics",
    "Skincare Orlando",
    "Facial Treatments Orlando",
    "IPL Laser Hair Removal",
    "Laser Hair Removal Orlando",
    "Waxing Services Orlando",
    "Esthetician Orlando",
    "Professional Skincare",
    "LED Light Therapy",
    "Dermaplaning",
    "Acne Treatment",
    "Hydrafacial",
    "Microdermabrasion",
    "Brazilian Wax",
    "Full Body IPL",
    "Facial Services",
    "Beauty Services Orlando",
    "Spa Services Orlando",
    "Skincare Studio",
    "Beauty Treatments",
    "Anti-Aging Facials",
    "Rejuvenating Facial",
    "Gua Sha Facial",
    "Hydrodermabrasion",
    "Back Facial",
    "Body Treatments",
    "Orlando Esthetics",
    "Florida Skincare",
    "Licensed Esthetician",
    "AnaKarina Esthetics",
  ],
  authors: [{ name: "Moonstar Esthetics" }],
  creator: "Moonstar Esthetics",
  publisher: "Moonstar Esthetics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.moonstaresthetics.com/",
    siteName: "Moonstar Esthetics",
    title: "Moonstar Esthetics | Professional Skincare & Beauty Services",
    description:
      "Professional skincare, IPL laser hair removal, and waxing services in Orlando, FL. Experience personalized facials, LED light therapy, and expert esthetician care for radiant, healthy skin.",
    images: [
      {
        url: "/screenshots/homePage.png",
        width: 1200,
        height: 630,
        alt: "Moonstar Esthetics - Professional Skincare & Beauty Services in Orlando, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonstar Esthetics | Professional Skincare & Beauty Services",
    description:
      "Professional skincare, IPL laser hair removal, and waxing services in Orlando, FL. Book your appointment today for radiant, healthy skin.",
    images: ["/screenshots/homePage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification code if available
    // google: "your-verification-code",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
