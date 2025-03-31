import { useNavigate } from "react-router-dom";
import styles from "./MinistereeCard.module.css";

type MinistereeCardProps = {
  name: string;
  phone: string;
  address: string;
  birthday: string;
  imageUrl: string;
};

const MinistereeCard = ({ name, phone, address, birthday, imageUrl }: MinistereeCardProps) => {
  const navigate = useNavigate();

  const handleServiceRequestClick = () => {
    navigate("/ServiceRequest", {
      state: {
        receiverName: name,
        receiverPhone: phone,
      },
    });
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>Contact: {phone}</p>
      <p>Address: {address}</p>
      <p>Birthday: {birthday}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={handleServiceRequestClick}>
          Service Request
        </button>
        <button className={styles.button}>Log Ministering Event</button>
      </div>
    </div>
  );
};

export default MinistereeCard;
