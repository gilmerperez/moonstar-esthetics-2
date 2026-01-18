export const metadata = {
  title: "Reviews",
  description:
    "Read client reviews and testimonials for Moonstar Esthetics. See what our customers say about our professional skincare, IPL laser hair removal, and waxing services in Orlando, FL.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com/reviews",
  },
  openGraph: {
    title: "Reviews | Moonstar Esthetics",
    description: "Client reviews and testimonials for professional skincare services in Orlando, FL.",
    url: "https://www.moonstaresthetics.com/reviews",
    images: [
      {
        url: "/screenshots/reviewsPage.png",
        width: 1200,
        height: 630,
        alt: "Moonstar Esthetics Reviews - Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Moonstar Esthetics",
    description: "Client reviews and testimonials for professional skincare services in Orlando, FL.",
    images: ["/screenshots/reviewsPage.png"],
  },
};

export default function ReviewsLayout({ children }) {
  return <>{children}</>;
}
