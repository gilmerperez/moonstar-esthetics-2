"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Contact() {
  // * Subject and message state
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // * Send email
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "moonstaresthetics@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <div className={styles.contactContainer}>
        {/* Title */}
        <h1 className={styles.contactTitle}>LET&apos;S CONNECT</h1>
        {/* Description */}
        <p className={styles.contactDescription}>
          We&apos;d love to hear from you. Whether you have a question about our services, want to request a consultation,
          or simply want to say hello — feel free to reach out below.
        </p>

        {/* Contact form */}
        <section className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* Subject field */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <input
                required
                type="text"
                id="subject"
                value={subject}
                placeholder="Subject"
                className={styles.formControl}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="subject">Subject</label>
            </div>
            {/* Message field */}
            <div className={`${styles.formGroup} ${styles.formFloating}`}>
              <textarea
                required
                id="message"
                value={message}
                placeholder="Message"
                className={styles.formControl}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            {/* Submit button */}
            <button type="submit" className={styles.submitBtn}>
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
