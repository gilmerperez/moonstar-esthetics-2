export const metadata = {
  title: "Services",
  description:
    "Browse our complete range of skincare services including facials, IPL laser hair removal, waxing, LED light therapy, and body treatments. Professional esthetician services in Orlando, FL.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com/services",
  },
  openGraph: {
    title: "Services | Moonstar Esthetics",
    description: "Professional skincare, IPL laser hair removal, and waxing services in Orlando, FL.",
    url: "https://www.moonstaresthetics.com/services",
    images: [
      {
        url: "/screenshots/servicesPage.png",
        width: 1200,
        height: 630,
        alt: "Moonstar Esthetics Services - Professional Skincare Treatments in Orlando, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Moonstar Esthetics",
    description: "Professional skincare, IPL laser hair removal, and waxing services in Orlando, FL.",
    images: ["/screenshots/servicesPage.png"],
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
