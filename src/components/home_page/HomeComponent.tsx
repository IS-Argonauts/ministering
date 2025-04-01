"use client";
<<<<<<< Updated upstream
import MinisterAssignmentCard from "../minister-assignment-card/MinisterAssignmentCard";
=======
import { Link, useNavigate } from "react-router-dom";
import MinistereeCard from "../ministeree_card/MinistereeCard";
import MinisteringCompanionCard from "../ministering_companion_card/MinisteringCompanionCard";
>>>>>>> Stashed changes
import styles from "./components.module.css";


const HomeComponent = () => {
<<<<<<< Updated upstream
=======

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const user = {
    firstName: "Larry",
    lastName: "Smith",
    phone: "801-555-1234",
    address: "123 Main St, Provo, UT",
    birthday: "January 1, 1990",
    imageUrl: "src/images/stockPhoto1.jpg",
  };


>>>>>>> Stashed changes
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Welcome</h1>

        {/* Reminders Section */}
        <section className={styles.reminders}>
          <h2>Reminders</h2>
          <ul>
            <li>
              Jane Ludwig has a Birthday next week. Click <a href="#">here</a> for ideas.
            </li>
            <li>You haven’t visited Keith in 12 days</li>
          </ul>
        </section>

        {/* Ministering Companion */}
        <section className={styles.assignmentSection}>
<<<<<<< Updated upstream
          <h2>Ministering Companion</h2>
          <div className={styles.cardScroll}>
            <MinisterAssignmentCard
=======
          <h2 style={{ textAlign: "center" }}>Ministering Companion</h2>
          <div className={styles.cardScroll} onClick={() => handleNavigation("/profile/5")}>
            <MinisteringCompanionCard
>>>>>>> Stashed changes
              name="Steve Boyd"
              contact="801-000-0000"
              address="W310 TNRB, Provo, UT"
              birthday="January 17, 1957"
              image="src/images/Steve.jpeg"
            />
          </div>
        </section>

        {/* Ministerees */}
        <section className={styles.assignmentSection}>
          <h2>Ministerees</h2>
          <div className={styles.cardScroll}>
            <MinisterAssignmentCard
              name="Keith Carney"
              contact="801-555-1111"
              address="101 Campus Dr, Provo, UT"
              birthday="March 27, 1995"
              image="src/images/stockphoto2.jpg"
            />
            <MinisterAssignmentCard
              name="Jane Ludwig"
              contact="801-555-2222"
              address="102 Campus Dr, Provo, UT"
              birthday="January 27, 1995"
              image="src/images/stockPhoto1.jpg"
            />
          </div>
        </section>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <div className={styles.actionCard}>
            <p>Recently visited this member? Log your progress now.</p>
            <button className={styles.iconButton}>📝</button>
          </div>
          <div className={styles.actionCard}>
            <p>Know someone in need? Submit a Ward Service Request.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeComponent;
