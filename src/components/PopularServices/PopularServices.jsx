import styles from "./PopularServices.module.css";
import Link from "next/link";

export default function PopularServices() {
  return (
    <section className={styles.popularServicesSection}>
      <div className={styles.overlay}>
        {/* Title */}
        <h2 className={styles.popularServicesTitle}>OUR MOST LOVED TREATMENTS</h2>
        {/* Description */}
        <p className={styles.popularServicesDescription}>
          Below are some of our most popular services that clients keep coming back for. Whether you&apos;re looking for a
          quick laser session or a luxurious deep-cleansing facial, we&apos;re here to help you look and feel your absolute
          best.
        </p>
        {/* Services */}
        <div className={styles.servicesList}>
          {/* 1st Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Facial</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$68</span>
          </div>
          {/* 2nd Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Dermaplaning + Facial</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$90</span>
          </div>
          {/* 3rd Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Acne Treatment Facial</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$100</span>
          </div>
          {/* 4th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Rejuvinating Facial (IPL)</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$100</span>
          </div>

          {/* 5th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Body IPL</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$280</span>
          </div>
          {/* 6th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Face IPL</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$45</span>
          </div>
          {/* 7th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Brazilian + Underarms IPL</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$100</span>
          </div>
          {/* 8th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Underarms Wax</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$18</span>
          </div>
          {/* 9th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Face Wax</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$25</span>
          </div>

          {/* 10th Service */}
          <div className={styles.serviceItem}>
            <span className={styles.serviceName}>Full Legs Wax</span>
            <span className={styles.line}></span>
            <span className={styles.servicePrice}>$60</span>
          </div>
          {/* Explore all services */}
          <Link href="/services" className={styles.viewServices}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
