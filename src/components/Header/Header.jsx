"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
  const isActive = (path) => pathname === path;

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
            <Link href="/" className={styles.moonstarLogo}>
              <span className={styles.moonstar}>MOONSTAR</span>
              <span className={styles.esthetics}>ESTHETICS</span>
            </Link>
            <div className={styles.navContainer}>
              {/* Site navigation */}
              <nav className={styles.navItems}>
                <Link href="/" className={isActive("/") ? styles.activeLink : undefined}>
                  Home
                </Link>
                <Link href="/services" className={isActive("/services") ? styles.activeLink : undefined}>
                  Services
                </Link>
                <Link href="/reviews" className={isActive("/reviews") ? styles.activeLink : undefined}>
                  Reviews
                </Link>
                <Link href="/information" className={isActive("/information") ? styles.activeLink : undefined}>
                  Information
                </Link>
              </nav>
              {/* Separator */}
              <span className={styles.separator}>|</span>
              <div className={styles.functionalButtons}>
                {/* Theme button */}
                <button className={styles.themeButton} onClick={toggleTheme} aria-label="Toggle theme">
                  <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
                </button>
                {/* Book now button */}
                <button className={styles.bookNowButton}>
                  <Link rel="noopener noreferrer" target="_blank" href="https://moonstaresthetics.setmore.com/">
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile header */}
          <div className={styles.mobileHeader}>
            {/* Phone button */}
            <button className={styles.phoneButton} onClick={handlePhoneClick} aria-label="Call us">
              <i className="fa-solid fa-phone-volume"></i>
            </button>
            {/* Logo */}
            <Link href="/" className={styles.mobileLogoContainer}>
              <span className={styles.moonstar}>MOONSTAR</span>
              <span className={styles.esthetics}>ESTHETICS</span>
            </Link>
            {/* Hamburger menu */}
            <button className={styles.hamburger} onClick={handleHamburgerClick} aria-label="Open menu">
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
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <i className="fa-solid fa-xmark"></i>
              </button>
              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <Link
                  href="/"
                  className={isActive("/") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={isActive("/services") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/reviews"
                  className={isActive("/reviews") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/information"
                  className={isActive("/information") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Information
                </Link>
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
                <button
                  className={`${styles.themeButton} ${styles.sidebarThemeButton}`}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
                </button>
                {/* Sidebar legal pages */}
                <Link
                  href="/contact"
                  className={isActive("/contact") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/privacy-policy"
                  className={isActive("/privacy-policy") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className={isActive("/terms-of-service") ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
