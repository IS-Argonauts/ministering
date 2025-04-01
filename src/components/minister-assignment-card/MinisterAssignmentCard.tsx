"use client";

import styles from "./MinisterAssignmentCard.module.css";

interface MinisterAssignmentCardProps {
  name: string;
  contact: string;
  address: string;
  birthday: string;
  image: string;
  alt?: string;
}

const MinisterAssignmentCard = ({ name, contact, address, birthday, image, alt }: MinisterAssignmentCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={alt || name} />
      <h3>{name}</h3>
      <p>Contact: {contact}</p>
      <p>Address: {address}</p>
      <p>Birthday: {birthday}</p>
    </div>
  );
};

export default MinisterAssignmentCard;