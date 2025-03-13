import React from "react";
import styles from "./components.module.css";

interface EventCardProps {
  name: string;
  date: string;
  description: string;
  imageUrl: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  date,
  description,
  imageUrl,
}) => {
  return (
    <article className={styles.eventCard}>
      <div className={styles.profileImage}>
        <img src={imageUrl} alt="Profile" className={styles.image} />
      </div>
      <div className={styles.eventContent}>
        <div className={styles.eventHeader}>
          <h3 className={styles.userName}>{name}</h3>
          <time className={styles.eventDate}>{date}</time>
        </div>
        <p className={styles.eventDescription}>{description}</p>
      </div>
    </article>
  );
};
