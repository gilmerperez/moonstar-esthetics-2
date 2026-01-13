import styles from "./Invest.module.css";

export default function Invest() {
  const tips = [
    "Drink plenty of water",
    "Apply sunscreen every day",
    "Exfoliate your skin weekly",
    "Invest in quality products",
    "Moisturize every morning and night",
  ];

  return (
    <section className={styles.investSection}>
      {/* Title */}
      <h2 className={styles.investTitle}>
        THE BEST INVETMENT <br /> YOU CAN MAKE IS IN YOURSELF
      </h2>
      {/* Description */}
      <p className={styles.investDescription}>
        Small daily habits can transform your skin and confidence. Nourish, protect, and treat yourself with care —
        because radiant skin starts from within
      </p>
      {/* Tips */}
      <div className={styles.investTips}>
        {tips.map((tip, index) => (
          <div key={index} className={styles.investTip}>
            <div className={styles.tipNumber}>{index + 1}</div>
            <div className={styles.tipText}>{tip}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
