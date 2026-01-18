import styles from "./page.module.css";

export const metadata = {
  title: "Moonstar Esthetics | Privacy Policy",
  description:
    "Privacy Policy for Moonstar Esthetics. Learn how we handle your information when you visit our website.",
  alternates: {
    canonical: "https://www.moonstaresthetics.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
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
        <div className={styles.privacyPolicyContainer}>
          {/* Title */}
          <h1 className={styles.privacyPolicyTitle}>PRIVACY POLICY</h1>
          {/* Description */}
          <p className={styles.privacyPolicyDescription}>
            Your privacy is important to us. This Privacy Policy explains how we handle your information when you visit
            our website.
          </p>

          {/* Privacy policy */}
          <section className={styles.policy}>
            {/* Policy updates */}
            <h2 className={styles.policyHeading}>Policy Updates</h2>
            <p className={styles.policyText}>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page. Last
              updated: {month} {year}.
            </p>
            {/* Cookies and analytics */}
            <h2 className={styles.policyHeading}>Cookies and Analytics</h2>
            <p className={styles.policyText}>
              This website does not use cookies, tracking pixels, or analytics tools. We do not track your activity,
              behavior, or device usage.
            </p>
            {/* Personal information */}
            <h2 className={styles.policyHeading}>Personal Information</h2>
            <p className={styles.policyText}>
              We do not collect any personal information directly through this website. You can browse our content
              freely without creating an account, signing in, or submitting any personal data.
            </p>
            {/* Purpose of the site */}
            <h2 className={styles.policyHeading}>Purpose of the Site</h2>
            <p className={styles.policyText}>
              This website serves as an informational platform for Moonstar Esthetics. It provides details about our
              company, services, and booking options. It does not engage in advertising or e-commerce.
            </p>
            {/* Booking platform */}
            <h2 className={styles.policyHeading}>Booking Platform</h2>
            <p className={styles.policyText}>
              Appointment scheduling is handled through our trusted third-party platform,{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://setmore.com">
                Setmore
              </a>
              . When booking a service, you may be asked to provide information such as your name, contact details, and
              appointment preferences. Please refer to Setmore&apos;s own{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.setmore.com/privacy">
                Privacy Policy
              </a>{" "}
              for details on how your data is handled on their platform.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
