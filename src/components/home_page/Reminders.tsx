import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './components.module.css' // adjust as needed

export default function Reminders() {
  const [showReminders, setShowReminders] = useState(true);

  useEffect(() => {
    const storedValue = localStorage.getItem('remindersDismissed');
    if (storedValue === 'true') {
      setShowReminders(false);
    }
  }, []);

  const dismissReminders = () => {
    setShowReminders(false);
    localStorage.setItem('remindersDismissed', 'true');
  };

  return (
    <>
      {showReminders && (
        <section className={styles.reminders}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Reminders</h2>
            <button
                onClick={dismissReminders}
                className={styles.reminderCloseButton}
                aria-label="Dismiss reminders"
            >
                &times;
            </button>
          </div>
          <ul>
            <li>
              Jane Ludwig has a birthday soon! See the{" "}
              <Link to="/IdeaGenerator" className={styles.ideaLink}>
                Idea Generator
              </Link>{" "}
              for ideas.
            </li>
            <li>
              You haven’t visited Keith in{" "}
              <span className={styles.daysHighlight}>12</span> days
            </li>
          </ul>
        </section>
      )}
    </>
  );
}
