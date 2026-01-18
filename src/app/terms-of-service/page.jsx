import styles from "./page.module.css";

export const metadata = {
  title: "Moonstar Esthetics | Terms of Service",
  description: "Terms of Service for Moonstar Esthetics website. Read our terms and conditions for using our site.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  // * Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // * Get current year and month
  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>
          {/* Title */}
          <h1 className={styles.termsOfServiceTitle}>TERMS OF SERVICE</h1>
          {/* Description */}
          <p className={styles.termsOfServiceDescription}>
            These Terms of Service govern your use of the Moonstar Esthetics website. By visiting or using this site,
            you agree to comply with and be bound by these terms. If you do not agree, please refrain from using the
            site.
          </p>

          {/* Terms of service */}
          <section className={styles.terms}>
            {/* No user accounts */}
            <h2 className={styles.termsHeading}>No User Accounts</h2>
            <p className={styles.termsText}>
              This website does not require account creation or login. You may access and browse all public content
              without registering or providing personal information.
            </p>
            {/* Changes to terms */}
            <h2 className={styles.termsHeading}>Changes to Terms</h2>
            <p className={styles.termsText}>
              These Terms of Service may be updated periodically. Continued use of the website after changes have been
              made constitutes acceptance of the revised terms. Last updated: {month} {year}.
            </p>
            {/* Acceptable use */}
            <h2 className={styles.termsHeading}>Acceptable Use</h2>
            <p className={styles.termsText}>
              You agree to use this website for lawful, informational purposes only. You must not interfere with the
              operation of the site, attempt unauthorized access, or misuse any of its content or functionality.
            </p>
            {/* Intellectual property */}
            <h2 className={styles.termsHeading}>Intellectual Property</h2>
            <p className={styles.termsText}>
              All content on this website, including logos, text, graphics, and styling, is the property of Moonstar
              Esthetics unless otherwise stated. You may not reproduce, modify, or distribute any materials without
              written permission.
            </p>
            {/* Service disclaimer */}
            <h2 className={styles.termsHeading}>Service Disclaimer</h2>
            <p className={styles.termsText}>
              Information on this site is provided for general reference and promotional purposes only. While we strive
              for accuracy, Moonstar Esthetics does not guarantee the completeness or reliability of any content and
              reserves the right to update or remove information at any time.
            </p>
            {/* Appointment booking */}
            <h2 className={styles.termsHeading}>Appointment Booking</h2>
            <p className={styles.termsText}>
              Appointment bookings are processed through{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://setmore.com">
                Setmore
              </a>
              , a third-party scheduling platform. Any information submitted through Setmore is subject to their own{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.setmore.com/privacy">
                Terms of Service
              </a>{" "}
              and privacy policies.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
