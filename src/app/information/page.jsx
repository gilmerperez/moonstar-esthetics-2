import styles from "./page.module.css";

export const metadata = {
  title: "Moonstar Esthetics | Information",
  description:
    "Find Moonstar Esthetics location, hours, payment options, and contact details. Located in Orlando, FL. Open Monday-Friday.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com/information",
  },
  openGraph: {
    title: "Information | Moonstar Esthetics",
    description: "Location, hours, and contact information for Moonstar Esthetics in Orlando, FL.",
    url: "https://www.moonstaresthetics.com/information",
    images: [
      {
        url: "/screenshots/informationPage.png",
        width: 1200,
        height: 630,
        alt: "Moonstar Esthetics Information - Location and Contact Details",
      },
    ],
  },
};

export default function Information() {
  return (
    <>
      <main>
        <div className={styles.informationContainer}>
          {/* Title */}
          <h1 className={styles.informationTitle}>HOW TO REACH US</h1>
          {/* Description */}
          <p className={styles.informationDescription}>
            Find our location, hours, payment options, and contact details below. Let us know how we can assist you!
          </p>

          <div className={styles.cardsRow}>
            {/* Phone card */}
            <a href="tel:3213520639" className={styles.infoCard}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-phone"></i>
                <h2>Phone</h2>
              </div>
              <p className={styles.contactDetail}>(321) 352-0639</p>
              <p className={styles.cardSubheading}>Call or text us with any questions or concerns</p>
            </a>
            {/* Email card */}
            <a href="mailto:moonstaresthetics@gmail.com" className={styles.infoCard}>
              <div className={styles.iconRow}>
                <i className="fa-solid fa-envelope"></i>
                <h2>Email</h2>
              </div>
              <p className={styles.contactDetail}>moonstaresthetics@gmail.com</p>
              <p className={styles.cardSubheading}>We typically respond within a few hours</p>
            </a>
          </div>

          {/* Payment card */}
          <div className={styles.paymentCard}>
            <div className={styles.iconRow}>
              <i className="fa-solid fa-credit-card"></i>
              <h2>Payment Options</h2>
            </div>
            <div className={styles.paymentIcons}>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-amex"></i>
              <i className="fa-brands fa-cc-discover"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              <i className="fa-brands fa-cc-apple-pay"></i>
            </div>
            <p className={styles.cardSubheading}>Pay easily with any of our online payment options or in person.</p>
          </div>

          {/* Hours of Operation card */}
          <div className={styles.hoursCard}>
            <div className={styles.iconRow}>
              <i className="fa-solid fa-clock"></i>
              <h2>Hours of Operation</h2>
            </div>
            <div className={styles.hoursContainer}>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Sunday</p>
                <p className={styles.hoursTime}>Closed</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Monday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Tuesday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Wednesday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Thursday</p>
                <p className={styles.hoursTime}>8AM - 8:30PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Friday</p>
                <p className={styles.hoursTime}>8AM - 8PM</p>
              </div>
              <div className={styles.hoursList}>
                <p className={styles.hoursDay}>Saturday</p>
                <p className={styles.hoursTime}>Closed</p>
              </div>
            </div>
            <p className={styles.cardSubheading}>All times displayed in Eastern Daylight Time (EDT).</p>
          </div>
        </div>
      </main>
    </>
  );
}
