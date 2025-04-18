"use client";
import { Link } from "react-router-dom";
import MinistereeCard from "../ministeree_card/MinistereeCard";
import MinisteringCompanionCard from "../ministering_companion_card/MinisteringCompanionCard";
import styles from "./components.module.css";
import Reminders from "./Reminders";

const HomeComponent = () => {

  const user = {
    firstName: "Larry",
    lastName: "Smith",
    phone: "801-555-1234",
    address: "123 Main St, Provo, UT",
    birthday: "January 1, 1990",
    imageUrl: "src/images/stockPhoto1.jpg",
  };


  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Welcome, { user.firstName }</h1>

        {/* Reminders Section */}
        <Reminders />

        {/* Ministering Companion */}
        <section className={styles.assignmentSection}>
          <h2 style={{ textAlign: "center" }}>Ministering Companion</h2>
          <div className={styles.cardScroll}>
            <MinisteringCompanionCard
              name="Steve Boyd"
              phone="801-000-0000"
              address="W310 TNRB, Provo, UT"
              birthday="January 17, 1957"
              imageUrl="src\assets\RandomMan.jpg"
            />
          </div>
        </section>

        {/* Ministerees */}
        <section className={styles.assignmentSection}>
          <h2 style={{ textAlign: "center" }}>Assigned To:</h2>
            <div className={styles.cardScroll}>
              <MinistereeCard
                name="Keith Carney"
                phone="801-555-1111"
                address="101 Campus Dr, Provo, UT"
                birthday="March 27, 1995"
                imageUrl="src/images/stockphoto2.jpg"
              />
              <MinistereeCard
                name="Jane Ludwig"
                phone="801-555-2222"
                address="102 Campus Dr, Provo, UT"
                birthday="January 27, 1995"
                imageUrl="src/images/stockPhoto1.jpg"
              />
            </div>
        </section>
      </main>
    </div>
  );
};

export default HomeComponent;
