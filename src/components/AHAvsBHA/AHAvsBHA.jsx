import styles from "./AHAvsBHA.module.css";

function AHAvsBHA() {
  return (
    <>
      <section className={styles.ahaVsBhaSection}>
        <div className={styles.overlay}>
          {/* Title */}
          <h2 className={styles.ahaVsBhaTitle}>AHA VS BHA</h2>
          {/* Description */}
          <p className={styles.ahaVsBhaDescription}>
            AHAs exfoliate the skin's surface for a smoother, brighter complexion—ideal for dry or sun-damaged skin.
            BHAs penetrate deep into pores to remove excess oil and impurities—perfect for oily or acne-prone skin.
          </p>
          {/* Columns */}
          <div className={styles.contentGrid}>
            {/* AHAs Column */}
            <div className={styles.column}>
              {/* Subheading */}
              <h3 className={styles.columnSubheading}>AHA</h3>
              {/* List */}
              <ul className={styles.columnList}>
                <li>Common AHAs include glycolic and lactic acids.</li>
                <li>Ideal for uneven, dehydrated, or lackluster skin.</li>
                <li>Helps reduce fine lines, rough texture, and dullness.</li>
                <li>Water-soluble; best suited for dry or normal skin types.</li>
                <li>Exfoliates the skin's surface and brightens overall tone.</li>
              </ul>
            </div>
            {/* BHAs Column */}
            <div className={styles.column}>
              {/* Subheading */}
              <h3 className={styles.columnSubheading}>BHA</h3>
              {/* List */}
              <ul className={styles.columnList}>
                <li>Common BHA: salicylic acid.</li>
                <li>Ideal for acne-prone or congested skin.</li>
                <li>Targets acne, blackheads, and clogged pores.</li>
                <li>Penetrates deep into pores to clear oil buildup.</li>
                <li>Oil-soluble; perfect for oily and combination skin.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AHAvsBHA;
