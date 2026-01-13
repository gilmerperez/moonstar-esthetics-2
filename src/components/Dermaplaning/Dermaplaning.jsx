"use client";
import { useState } from "react";
import styles from "./Dermaplaning.module.css";

export default function Dermaplaning() {
  // * State for expanded version
  const [expanded, setExpanded] = useState(false);

  // * Toggle expanded version
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section className={`${styles.dermaplaningSection} ${expanded ? styles.expanded : ""}`}>
        {/* Collapsed */}
        <div className={styles.dermaplaningContent}>
          {/* Title */}
          <h2 className={styles.dermaplaningTitle}>SHAVE YOUR FACE WITH A SCALPEL?</h2>
          {/* Description */}
          <p className={styles.dermaplaningText1}>
            Sounds crazy, right? But dermaplaning is one of the safest, most effective ways to exfoliate your skin and
            reveal a glowing complexion. Want to learn more about dermaplaning and see real results? Click the button
            below to learn more
          </p>
          {/* Learn more */}
          {!expanded && (
            <button onClick={handleToggle} className={styles.toggleButton}>
              Learn More
            </button>
          )}

          {/* Expanded */}
          {expanded && (
            <>
              {/* Description */}
              <p className={styles.dermaplaningText2}>
                Dermaplaning involves gently scraping away dead skin cells and peach fuzz with a sterile surgical
                scalpel. It&apos;s a painless, non-invasive treatment that instantly leaves your skin softer, smoother,
                and ready to better absorb skincare products.
              </p>
              <p className={styles.dermaplaningText2}>
                Many fear it makes hair grow back thicker — that&apos;s a myth! Vellus hair returns just as soft and
                fine as before. Plus, dermaplaning helps reduce the appearance of fine lines and gives makeup a flawless
                finish.
              </p>
              {/* Learn more/Show less button */}
              <button onClick={handleToggle} className={styles.toggleButton}>
                Show Less
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
