import React, { useState } from "react";
import styles from "./components.module.css";

interface Event {
  date: string;
  description: string;
}

interface EventCardProps {
  name: string;
  imageUrl: string;
  events: Event[];
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  imageUrl,
  events,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmit = () => {
    alert(
      `New event for ${name.split(" ")[0]}:\n${newDate} - ${newDescription}`
    );
    setNewDate("");
    setNewDescription("");
    setShowForm(false);
  };

  return (
    <article className={styles.eventCard}>
      <div className={styles.profileImage}>
        <img
          src={imageUrl}
          alt={`Profile of ${name}`}
          className={styles.image}
        />
      </div>
      <div className={styles.eventContent}>
        <div className={styles.eventHeader}>
          <h3 className={styles.userName}>{name}</h3>
        </div>

        {/* Loop through event history */}
        {events.map((event, index) => (
          <div key={index} className={styles.eventEntry}>
            <time className={styles.eventDate}>{event.date}</time>
            <p className={styles.eventDescription}>{event.description}</p>
          </div>
        ))}

        <button
          onClick={() => setShowForm(!showForm)}
          className={styles.addButton}
        >
          {showForm ? "Cancel" : `Add Event for ${name.split(" ")[0]}`}
        </button>

        {showForm && (
          <div className={styles.formContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Date (e.g. 3/27/25)"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <textarea
              className={styles.textarea}
              placeholder="Event description..."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleSubmit} className={styles.submitButton}>
              Submit Event
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
