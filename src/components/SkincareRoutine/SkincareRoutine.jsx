import styles from "./SkincareRoutine.module.css";

function SkincareRoutine() {
  return (
    <>
      <section className={styles.routineSection}>
        {/* Title */}
        <h2 className={styles.routineTitle}>SKINCARE ROUTINE STEPS</h2>
        {/* Description */}
        <p className={styles.routineDescription}>
          Glow from start to finish by cleansing, toning, hydrating, and protecting your skin for radiance every day
        </p>
        {/* Steps */}
        <div className={styles.routineSteps}>
          {/* Step 1 */}
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepHeading}>CLEANSER</div>
          <div className={styles.stepText}>Refresh your skin and remove makeup</div>
          {/* Step 2 */}
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepHeading}>TONER</div>
          <div className={styles.stepText}>Refreshes your skin and removes make-up</div>
          {/* Step 3 */}
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepHeading}>EYE CREAM</div>
          <div className={styles.stepText}>Special formula for use on delicate skin around eyes</div>
          {/* Step 4 */}
          <div className={styles.stepNumber}>4</div>
          <div className={styles.stepHeading}>SERUM</div>
          <div className={styles.stepText}>Delivers specific active ingredients to the skin</div>
          {/* Step 5 */}
          <div className={styles.stepNumber}>5</div>
          <div className={styles.stepHeading}>MOISTURIZER</div>
          <div className={styles.stepText}>To increase the water content of the skin</div>
        </div>
      </section>
    </>
  );
}

export default SkincareRoutine;
