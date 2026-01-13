"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ServiceCard.module.css";
import Image from "next/image";

export default function ServiceCard({ service }) {
  // * Set state for cancellation policy popup
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.serviceCard}>
        {/* Service image */}
        <div className={styles.serviceImageContainer}>
          <Image
            src={service.image}
            alt={`${service.name} Service Image`}
            width={250}
            height={250}
            className={styles.serviceImage}
          />
        </div>
        {/* Service content */}
        <div className={styles.serviceContent}>
          {/* Service name */}
          <h2 className={styles.serviceName}>{service.name}</h2>
          {/* Service meta content */}
          <div className={styles.serviceMetaContent}>
            <span className={styles.serviceDuration}>{service.duration}</span>
            <span className={styles.serviceMetaSeperator}>|</span>
            <span className={styles.servicePrice}>${service.price}</span>
          </div>
          <p className={styles.serviceDescription}>{service.description}</p>
          {/* Book now button */}
          <div className={styles.buttonContainer}>
            <button className={styles.bookNowButton}>
              <a target="_blank" rel="noopener noreferrer" href="https://moonstaresthetics.setmore.com/">
                Book Now
              </a>
            </button>
            {/* Cancellation policy icon */}
            <button onClick={() => setShowModal(true)} className={styles.policyIconButton} aria-label="View cancellation policy">
              <i className="fa-regular fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Cancellation policy modal */}
      {showModal &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h3 className={styles.modalTitle}>Cancellation Policy</h3>
              <p className={styles.modalText}>
                You can cancel or reschedule up to 24 hours before the appointment time.
              </p>
              <button onClick={() => setShowModal(false)} className={styles.modalCloseButton}>
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
