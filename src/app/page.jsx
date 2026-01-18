import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import Studio from "../components/Studio/Studio";
import AHAvsBHA from "../components/AHAvsBHA/AHAvsBHA";
import Dermaplaning from "../components/Dermaplaning/Dermaplaning";
import PopularServices from "../components/PopularServices/PopularServices";
import SkincareRoutine from "../components/SkincareRoutine/SkincareRoutine";
import LEDTherapy from "../components/LEDTherapy/LEDTherapy";
import Invest from "../components/Invest/Invest";
import ServiceComponent from "../components/ServiceComponent/ServiceComponent";
import LaserBenefits from "../components/LaserBenefits/LaserBenefits";

export const metadata = {
  title: "Moonstar Esthetics | Home",
  description:
    "Welcome to Moonstar Esthetics, a calm and modern studio dedicated to helping you achieve your most luminous skin. Professional skincare, IPL laser hair removal, and waxing services.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.homeContainer}>
          {/* Hero */}
          <Hero />
          {/* Studio */}
          <Studio />
          {/* Popular services */}
          <PopularServices />
          {/* Facial treatments */}
          <ServiceComponent
            image="/images/facial.jpg"
            title="SIGNATURE FACIAL TREATMENTS"
            text1="Our customized facials are designed to address your unique skin needs, whether you're looking for deep
            cleansing, intense hydration, or a radiant glow. Each treatment combines expert techniques with high-quality
            products to reveal your healthiest skin."
            text2="Indulge in self-care and experience the confidence that comes from truly luminous skin."
            link="https://moonstaresthetics.setmore.com/"
            buttonLabel="Reserve Your Spot Today"
          />
          {/* IPL laser services */}
          <ServiceComponent
            image="/images/laser-hair-removal-3.jpg"
            title="IPL LASER HAIR REMOVAL"
            text1="Our IPL (Intense Pulsed Light) hair removal treatments offer a gentle, effective solution for long-lasting smoothness. Using advanced technology, we target hair at the root to reduce and inhibit future growth, all while prioritizing your comfort and safety."
            text2="Enjoy silky, hair-free skin and the confidence that comes with expert care. Book your IPL session today."
            link="https://moonstaresthetics.setmore.com/"
            buttonLabel="Reserve Your Spot Today"
          />
          {/* Body treatments */}
          <ServiceComponent
            image="/images/back-facial.jpg"
            title="REVITALIZING BODY TREATMENTS"
            text1="Our back facials deeply cleanse, exfoliate, and nourish hard-to-reach skin, treating breakouts and
            congestion while restoring a healthy glow."
            text2="Reveal smoother, clearer skin and enjoy a luxurious treatment that leaves your back refreshed and radiant."
            link="https://moonstaresthetics.setmore.com/"
            buttonLabel="Reserve Your Spot Today"
          />
          {/* Waxing services */}
          <ServiceComponent
            image="/images/waxing.jpeg"
            title="PROFESSIONAL WAXING SERVICES"
            text1="Our gentle yet effective waxing treatments deliver smooth, long-lasting results by removing hair from the
            root. From brows to full-body, each service is tailored to ensure your comfort and the best outcome."
            text2="Reveal silky-soft skin and enjoy the confidence that comes with expert care."
            link="https://moonstaresthetics.setmore.com/"
            buttonLabel="Reserve Your Spot Today"
          />
          {/* Laser hair removal benefits */}
          <LaserBenefits />
          {/* AHAs vs BHAs */}
          <AHAvsBHA />
          {/* Dermaplaning */}
          <Dermaplaning />
          {/* LED light therapy */}
          <LEDTherapy />
          {/* Invest in yourself */}
          <Invest />
          {/* Skincare routine */}
          <SkincareRoutine />
        </div>
      </main>
    </>
  );
}
