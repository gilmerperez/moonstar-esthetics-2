import styles from "./Footer.module.css";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <section className={styles.topContainer}>
          {/* Logo */}
          <NavLink to="/" className={styles.logoContainer}>
            <span className={styles.moonstar}>MOONSTAR</span>
            <span className={styles.esthetics}>ESTHETICS</span>
          </NavLink>
          {/* Legal disclaimer */}
          <p className={styles.legalDisclaimer}>
            Moonstar Esthetics provides professional skincare and wellness services. This website is for informational
            purposes only and does not offer medical advice, diagnosis, or treatment. All services are by appointment
            only. Please consult a licensed professional for personalized care.
          </p>
          {/* Copyright */}
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Moonstar Esthetics. All rights reserved.</p>
        </section>

        {/* Separator */}
        <hr className={styles.separator} />

        <section className={styles.bottomContainer}>
          {/* Site navigation */}
          <section className={styles.siteNavigation}>
            <h6 className={styles.navHeader}>Pages</h6>
            <nav className={styles.navItems}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/reviews">Reviews</NavLink>
              <NavLink to="/information">Information</NavLink>
            </nav>
          </section>
          {/* Legal pages */}
          <section className={styles.legalPages}>
            <h6 className={styles.navHeader}>Legal</h6>
            <nav className={styles.navItems}>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </nav>
          </section>
          {/* Contact info */}
          <section className={styles.contactInfo}>
            <h6 className={styles.navHeader}>Contact</h6>
            <nav className={styles.navItems}>
              <a href="tel:3213520639">(321) 352-0639</a>
              <a href="mailto:moonstaresthetics@gmail.com">moonstaresthetics@gmail.com</a>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.google.com/maps/place/Orlando+spot/@28.4598745,-81.4403503,1737m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88e77f37214c6da9:0xc107f1a96cd2fcf!8m2!3d28.4598745!4d-81.43777!16s%2Fg%2F11q3zkxsn7?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
              >
                6881 Kingspointe Pkwy Suite #4 Orlando, FL 32819
              </Link>
            </nav>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
