"use client";

import { useState } from "react";
import styles from "./LaserBenefits.module.css";

const accordionData = [
  {
    title: "Precision",
    content: `Laser hair removal can target specific areas
with precision, making it ideal for removing hair
from smaller or hard-to-reach areas like the
upper lip, chin, or bikini line.`,
  },
  {
    title: "Long-Lasting Results",
    content: `Laser hair removal targets the hair follicles, damaging
them and inhibiting future hair growth. This leads to
long-lasting results compared to traditional hair
removal methods like shaving or waxing.`,
  },
  {
    title: "Speed and Efficiency",
    content: `The laser technology used in hair removal allows
for quick treatment sessions. Small areas such as
the upper lip can take just a few minutes, while
larger areas like the legs or back can take around
an hour.`,
  },
  {
    title: "Reduction in Ingrown Hairs",
    content: `Laser hair removal can significantly reduce
the occurrence of ingrown hairs, a
common problem associated with other
hair removal methods.`,
  },
];

export default function LaserBenefits() {
  // * Set active index
  const [activeIndex, setActiveIndex] = useState(0);

  // * Toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className={styles.laserSection}>
        <div className={styles.overlay}>
          {/* Title */}
          <h2 className={styles.laserTitle}>4 BENEFITS OF LASER HAIR REMOVAL</h2>
          {/* Accordion */}
          <div className={styles.accordion}>
            {accordionData.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                {/* Accordion title */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`${styles.accordionTitle} ${activeIndex === index ? styles.active : ""}`}
                >
                  {item.title}
                  <span className={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {/* Accordion text */}
                <div className={`${styles.accordionText} ${activeIndex === index ? styles.open : ""}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
