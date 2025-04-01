"use client";
import styles from "./components.module.css";

const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Welcome</h1>

        {/* Reminders Section */}
        <section className={styles.reminders}>
          <h2>Reminders</h2>
          <ul>
            <li>
              Jane Ludwig has a Birthday next week. Click <a href="#">here</a>{" "}
              for ideas.
            </li>
            <li>You haven’t visited Keith in 12 days</li>
          </ul>
        </section>

        {/* Ministering Companion */}
        <section className={styles.assignmentSection}>
          <h2>Ministering Companion</h2>
          <div className={styles.cardScroll}>
            <div className={styles.card}>
              <img src="src/images/Steve.jpeg" alt="Steve Boyd" />
              <h3>Steve Boyd</h3>
              <p>Contact: 801-000-0000</p>
              <p>Address: W310 TNRB, Provo, UT</p>
              <p>Birthday: January 17, 1957</p>
            </div>
          </div>
        </section>

        {/* Ministerees */}
        <section className={styles.assignmentSection}>
          <h2>Ministerees</h2>
          <div className={styles.cardScroll}>
            <div className={styles.card}>
              <img src="src/images/stockphoto2.jpg" alt="Keith Carney" />
              <h3>Keith Carney</h3>
              <p>Contact: 801-555-1111</p>
              <p>Address: 101 Campus Dr, Provo, UT</p>
              <p>Birthday: March 27, 1995</p>
            </div>

            <div className={styles.card}>
              <img src="src/images/stockPhoto1.jpg" alt="Jane Ludwig" />
              <h3>Jane Ludwig</h3>
              <p>Contact: 801-555-2222</p>
              <p>Address: 102 Campus Dr, Provo, UT</p>
              <p>Birthday: January 27, 1995</p>
            </div>
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
