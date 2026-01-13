import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  // * Sticky header logic
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // * Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  // * Theme switch
  const [theme, setTheme] = useState("light");

  // Make theme be set in DOM
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    const initialTheme = storedTheme || (prefersLight ? "light" : "dark");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Make media theme switch on phone's user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      setTheme(e.matches ? "light" : "dark");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // * Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle hamburger click with spin animation
  const handleHamburgerClick = () => {
    setMenuOpen(true);
    setIsSpinning(true);
    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 300);
  };

  // * Phone call handler
  const handlePhoneClick = () => {
    window.location.href = "tel:(321) 337-5193";
  };

  return (
    <>
      <header className={`${isScrollingUp ? styles.visible : styles.hidden}`}>
        <div className={styles.headerContainer}>
          {/* Desktop header */}
          <div className={styles.desktopHeader}>
            {/* Logo */}
            <NavLink to="/" className={styles.moonstarLogo}>
              <span className={styles.moonstar}>MOONSTAR</span>
              <span className={styles.esthetics}>ESTHETICS</span>
            </NavLink>
            <div className={styles.navContainer}>
              {/* Site navigation */}
              <nav className={styles.navItems}>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
                <NavLink to="/reviews" className={navLinkClass}>
                  Reviews
                </NavLink>
                <NavLink to="/information" className={navLinkClass}>
                  Information
                </NavLink>
              </nav>
              {/* Separator */}
              <span className={styles.separator}>|</span>
              <div className={styles.functionalButtons}>
                {/* Theme button */}
                <button className={styles.themeButton} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
                </button>
                {/* Book now button */}
                <button className={styles.bookNowButton}>
                  <Link rel="noopener noreferrer" target="_blank" to="https://moonstaresthetics.setmore.com/">
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile header */}
          <div className={styles.mobileHeader}>
            {/* Phone button */}
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
              <i className="fa-solid fa-phone-volume"></i>
            </button>
            {/* Logo */}
            <NavLink to="/" className={styles.mobileLogoContainer}>
              <span className={styles.moonstar}>MOONSTAR</span>
              <span className={styles.esthetics}>ESTHETICS</span>
            </NavLink>
            {/* Hamburger menu */}
            <button className={styles.hamburger} onClick={handleHamburgerClick}>
              <i className={`fa-solid fa-bars ${isSpinning ? styles.spin : ""}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <div className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Services
                </NavLink>
                <NavLink to="/reviews" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Reviews
                </NavLink>
                <NavLink to="/information" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Information
                </NavLink>
                {/* Sidebar separator */}
                <hr className={styles.sidebarSeparator} />
                {/* Sidebar book now button */}
                <button className={`${styles.bookNowButton} ${styles.sidebarBookNowButton}`}>
                  <a href="https://moonstaresthetics.setmore.com/" rel="noopener noreferrer" target="_blank">
                    Book Now
                  </a>
                </button>
              </nav>
              {/* Sidebar footer */}
              <div className={styles.sidebarFooter}>
                {/* Sidebar theme button */}
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
                </button>
                {/* Sidebar legal pages */}
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Privacy Policy
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Terms of Service
                </NavLink>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
