"use client";
import styles from "./components.module.css";
import { EventCard } from "./EventCard";
import { AddEventButton } from "./AddEventButton";

function PastEvents() {
  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Past Events</h1>
        <section className={styles.eventsList}>
          <EventCard
            name="Jane John"
            date="1/27/25"
            description="We helped her clean out her garage. And gave her husband a blessing."
            imageUrl="https://placehold.co/100x100/83A5A7/83A5A7"
          />
          <EventCard
            name="Jane John"
            date="1/27/25"
            description="We helped her clean out her garage. And gave her husband a blessing."
            imageUrl="https://placehold.co/100x100/83A5A7/83A5A7"
          />
        </section>
        <AddEventButton />
      </main>
    </div>
  );
}

export default PastEvents;
