import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Moonstar Esthetics | Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function PageNotFound() {
  return (
    <>
      <main className={styles.notFoundContainer}>
        {/* Title */}
        <h1 className={styles.pageNotFoundTitle}>PAGE NOT FOUND</h1>
        {/* Description */}
        <p className={styles.pageNotFoundDescription}>Sorry, the page you are looking for does not exist</p>
        {/* Go back home */}
        <Link href="/" className={styles.backButton}>
          Back to home page
        </Link>
      </main>
    </>
  );
}
