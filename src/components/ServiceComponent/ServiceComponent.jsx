import { Link } from "react-router-dom";
import styles from "./ServiceComponent.module.css";

function ServiceComponent({ image, title, text1, text2, link, buttonLabel }) {
  return (
    <>
      <section className={styles.serviceSection} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.serviceContent}>
          {/* Title */}
          <h2 className={styles.serviceTitle}>{title}</h2>
          {/* Description */}
          <p className={styles.serviceDescription1}>{text1}</p>
          <p className={styles.serviceDescription2}>{text2}</p>
          {/* CTA button */}
          <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.bookButton}>
            {buttonLabel}
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServiceComponent;
