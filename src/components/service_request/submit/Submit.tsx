import { useNavigate } from "react-router-dom";
import styles from "../ServiceRequestForm.module.css";

export default function Submit() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Your request has been submitted!</h1>
      <div className={styles.submitContainer}>
        <button
          className={styles.submitButton}
          onClick={() => navigate("/Home")}
        >
          Go back to Home
        </button>
      </div>
    </>
  );
}
