import { useState } from "react";
import styles from "./LEDTherapy.module.css";

function LEDLightTherapy() {
  // * Default to red LED light therapy version
  const [isGreen, setIsGreen] = useState(false);

  // * Toggle LED light therapy version
  const handleToggle = () => {
    setIsGreen((prev) => !prev);
  };

  return (
    <>
      <section
        className={styles.ledLightTherapySection}
        style={{
          backgroundImage: `url(${isGreen ? "/images/green-light-therapy.JPG" : "/images/red-light-therapy.jpeg"})`,
        }}
      >
        <div className={styles.ledLightTherapyContent}>
          {/* Title */}
          <h2 className={styles.ledLightTherapyTitle}>
            {isGreen ? "LED GREEN LIGHT THERAPY" : "LED RED LIGHT THERAPY"}
          </h2>
          {/* Description */}
          <p className={styles.ledLightDescription1}>
            {isGreen
              ? "LED Green Light Therapy targets pigmentation issues, calming and evening skin tone. It helps reduce hyperpigmentation, soothes irritated skin, and promotes a more balanced, luminous complexion."
              : "LED Red Light Therapy is a non-invasive treatment that uses specific wavelengths of light to rejuvenate the skin. It stimulates collagen production, reduces redness, fades acne scars, and helps achieve a firmer, more radiant complexion."}
          </p>
          <p className={styles.ledLightDescription2}>
            {isGreen
              ? "Interested in how red light can rejuvenate and revitalize your skin? Click below to explore its benefits."
              : "Interested in how green light can balance and brighten your complexion? Click below to explore its benefits."}
          </p>
          {/* Switch LED light */}
          <button onClick={handleToggle} className={styles.switchButton}>
            {isGreen ? "Experience Red Light Therapy" : "Experience Green Light Therapy"}
          </button>
        </div>
      </section>
    </>
  );
}

export default LEDLightTherapy;
