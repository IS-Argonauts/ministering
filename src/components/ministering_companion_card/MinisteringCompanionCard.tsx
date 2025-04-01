// components/MinisteringCompanionCard.jsx
import styles from "./MinisteringCompanionCard.module.css";

interface MinisteringCompanionCardProps {
  name: string;
  phone: string;
  address: string;
  birthday: string;
  imageUrl: string;
}

const MinisteringCompanionCard: React.FC<MinisteringCompanionCardProps> = ({ name, phone, address, birthday, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>Contact: {phone}</p>
      <p>Address: {address}</p>
      <p>Birthday: {birthday}</p>
    </div>
  );
};

export default MinisteringCompanionCard;
