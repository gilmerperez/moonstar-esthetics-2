import styles from "./ReviewCard.module.css";

function ReviewCard({ review }) {
  // * Get initials from name
  const initials = review.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  // * Calculate star percentage
  const starPercentage = (review.stars / 5) * 100;

  return (
    <>
      <section className={styles.reviewCard}>
        {/* Reviewer initials */}
        <div className={styles.reviewerInitials}>{initials}</div>
        {/* Review Content */}
        <div className={styles.reviewContent}>
          {/* Reviewer Name */}
          <h3 className={styles.reviewerName}>{review.name}</h3>

          {/* Review Star Amount and Timestamp */}
          <div className={styles.reviewMetaContent}>
            <div className={styles.starsContainer}>
              <div className={styles.starsBackground}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <i key={i} className="fa-regular fa-star"></i>
                  ))}
              </div>
              <div className={styles.starsForeground} style={{ width: `${starPercentage}%` }}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
              </div>
            </div>
            <span className={styles.timestamp}>{review.timestamp}</span>
          </div>

          {/* Review Text */}
          <p className={styles.text}>{review.text}</p>
        </div>
      </section>
    </>
  );
}

export default ReviewCard;
