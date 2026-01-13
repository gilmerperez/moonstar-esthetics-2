import styles from "./Studio.module.css";

export default function Studio() {
  return (
    <section className={styles.studioSection}>
      <div className={styles.overlay}>
        {/* Title */}
        <h2 className={styles.studioTitle}>WELCOME TO YOUR SANCTUARY</h2>
        {/* Description */}
        <p className={styles.studioDescription}>
          Come relax in our tranquil studio while we care for your skin. With a soothing spa setting, advanced tools,
          and professional products, we offer everything you need to restore balance to your body and mind.
        </p>
      </div>
    </section>
  );
}
