"use client";

import styles from "./page.module.css";
import { useState } from "react";
import services from "../../data/services.json";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function Services() {
  // * Sort option state that gets applied to all services
  const [sortOption, setSortOption] = useState("default");

  // * Track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({});

  // * Toggle expand/collapse category description
  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // * Convert duration to total minutes
  const parseDuration = (durationStr) => {
    const match = durationStr.match(/(?:(\d+)h)?\s*(?:(\d+)m)?/);
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    return hours * 60 + minutes;
  };

  return (
    <main>
      <div className={styles.servicesContainer}>
        {services.map((category) => {
          const isExpanded = expandedCategories[category.category];
          // Create a sorted copy of the services for this category
          let sortedServices = [...category.services];
          // Sort services
          if (sortOption === "price-asc") {
            sortedServices.sort((a, b) => a.price - b.price);
          } else if (sortOption === "price-desc") {
            sortedServices.sort((a, b) => b.price - a.price);
          } else if (sortOption === "duration-asc") {
            sortedServices.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
          } else if (sortOption === "duration-desc") {
            sortedServices.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
          }

          return (
            // * Category section
            <div key={category.category} className={styles.categorySection}>
              {/* Title */}
              <h1 className={styles.servicesTitle}>{category.category}</h1>
              {/* Description */}
              {category.description && (
                <>
                  <div className={`${styles.servicesDescription} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                    <p>{category.description}</p>
                  </div>
                  {/* Read more button */}
                  <button className={styles.readMoreButton} onClick={() => toggleExpand(category.category)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </>
              )}

              {/* Filters */}
              <div className={styles.filterControls}>
                <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="default">Sort</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration-asc">Duration: Short to Long</option>
                  <option value="duration-desc">Duration: Long to Short</option>
                </select>
              </div>

              {/* Service cards */}
              <div className={styles.serviceCards}>
                {sortedServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
