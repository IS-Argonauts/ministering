import React, { useState, useEffect } from "react";
import styles from "./SavedIdeas.module.css";
import { FaBookmark } from "react-icons/fa";

// Sample initial ideas
const initialIdeas = [
  "Invite them to grab lunch or a treat and catch up.",
  "Send them a message asking how their week is going.",
  "Pray specifically for their needs and let them know you're thinking of them.",
  "Offer to help with something—whether it's moving, babysitting, or running an errand.",
  "Share a scripture or uplifting quote that might encourage them.",
  "Write a short note or letter of appreciation and drop it off at their home.",
  "Invite them to a church activity or a wholesome social event.",
  "Ask if there's anything specific they need prayers for.",
  "Send a small, thoughtful gift (cookies, a book, or something related to their interests).",
  "Simply call them and have a genuine conversation about life.",
];

const SavedIdeas: React.FC = () => {
  // State to store the list of ideas
  const [savedIdeasData, setSavedIdeasData] = useState<string[]>([]);

  // Retrieve saved ideas from localStorage when the component mounts
  useEffect(() => {
    const savedIdeas = JSON.parse(localStorage.getItem("savedIdeas") || "[]");
    if (savedIdeas.length > 0) {
      setSavedIdeasData(savedIdeas);
    } else {
      setSavedIdeasData(initialIdeas); // Use initial ideas if nothing is saved
    }
  }, []);

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // State to manage the input value for a new idea
  const [newIdea, setNewIdea] = useState<string>("");

  // Function to handle the change in the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewIdea(event.target.value);
  };

  // Function to handle the addition of a new idea
  const handleAddIdea = () => {
    console.log("Adding idea:", newIdea); // Debugging line
    if (newIdea.trim() !== "") {
      const updatedIdeas = [...savedIdeasData, newIdea];
      setSavedIdeasData(updatedIdeas);
      localStorage.setItem("savedIdeas", JSON.stringify(updatedIdeas)); // Update localStorage
      setNewIdea(""); // Clear the input after adding
      setIsModalOpen(false); // Close the modal after adding the idea
    }
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewIdea(""); // Clear the input when modal is closed without saving
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <br />
        <br />
        <h1 className={styles.title}>Saved Ideas</h1>

        <div className={styles.ideaList}>
          {savedIdeasData.map((idea, index) => (
            <div key={index} className={styles.ideaItem}>
              <div className={styles.ideaIcon}>
                <FaBookmark />
              </div>
              <div className={styles.ideaText}>{idea}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.addButton}
        >
          Add Idea
        </button>

        {/* Modal for adding a new idea */}
        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Enter a New Idea</h2>
              <input
                type="text"
                value={newIdea}
                onChange={handleInputChange}
                className={styles.addIdeaInput}
                placeholder="Enter your idea"
              />
              <div className={styles.modalActions}>
                <button onClick={handleAddIdea} className={styles.saveButton}>
                  Save Idea
                </button>
                <button
                  onClick={handleCloseModal}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedIdeas;
