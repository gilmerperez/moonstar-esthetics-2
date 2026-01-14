import Image from "next/image";
import styles from "./Hero.module.css";

// * Calculate current age
const birthDate = new Date(1999, 9, 20);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// * Calculate years of experience
const yearsOfExperience = age - 20;

export default function Hero() {
  return (
    <>
      <section className={styles.heroSection}>
        {/* Moonstar logo */}
        <Image
          priority
          width={150}
          height={150}
          style={{ width: "auto" }}
          className={styles.moonstarMoon}
          src="/images/moonstar-moon.png"
          alt="Moonstar Esthetics Moon Logo"
        />
        <div className={styles.moonstarLogo}>
          <span className={styles.moonstar}>MOONSTAR</span>
          <span className={styles.esthetics}>ESTHETICS</span>
        </div>

        {/* AnaKarina's image */}
        <div className={styles.imageContainer}></div>

        {/* Title */}
        <h1 className={styles.homeTitle}>RADIANT SKIN IS HERE</h1>

        {/* Description */}
        <p className={styles.homeDescription}>
          Welcome to Moonstar Esthetics, a calm and modern studio dedicated to helping you achieve your most luminous
          skin. Here, every visit is more than a treatment, it&apos;s an opportunity to unwind, recharge, and leave
          feeling truly radiant.
        </p>

        {/* Business introduction */}
        <p className={styles.businessIntroduction}>
          I&apos;m AnaKarina, a licensed esthetician at {age} years old, with {yearsOfExperience} years of hands-on
          experience in professional skincare. I&apos;ve dedicated my career to personalized, results-driven treatments
          that bring out the healthiest, happiest version of your skin. From custom facials and gentle yet effective IPL
          laser hair removal to precise waxing and advanced light therapies, my services are designed to fit your unique
          needs. Whether you&apos;re longing for a fresh glow, smooth confidence, or simply a peaceful escape, I&apos;m
          here to make it happen. I cherish the trust my wonderful clients place in me, and I can&apos;t wait to welcome
          you into my treatment room!
        </p>
      </section>
    </>
  );
}
