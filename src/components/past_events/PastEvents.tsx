"use client";
import styles from "./components.module.css";
import { EventCard } from "./EventCard";

function PastEvents() {
  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Past Ministering Events</h1>

        <section className={styles.eventsList}>
          <EventCard
            name="Keith Carney"
            imageUrl="src/images/stockphoto2.jpg"
            events={[
              {
                date: "3/27/25",
                description:
                  "We helped him clean out his garage. And gave his wife a blessing.",
              },
            ]}
          />

          <EventCard
            name="Jane Ludwig"
            imageUrl="src/images/stockPhoto1.jpg"
            events={[
              {
                date: "1/27/25",
                description:
                  "Brought her brownies and a kind note. She opened up to us about how life is crazy for her right now.",
              },
              {
                date: "2/14/25",
                description:
                  "Dropped off a Valentine's card and flowers for her and her daughter.",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}

export default PastEvents;
