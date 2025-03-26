"use client";

import { useState } from "react";
import styles from "./IdeaGeneratorPage.module.css";
import { useNavigate } from "react-router-dom";

const ideas = [
  {
    idea: "Invite them to grab lunch or a treat and catch up.",
    when: "This week",
  },
  {
    idea: "Send them a message asking how their week is going.",
    when: "Today",
  },
  {
    idea: "Pray specifically for their needs and let them know you're thinking of them.",
    when: "Tonight",
  },
  {
    idea: "Offer to help with something—whether it's moving, babysitting, or running an errand.",
    when: "This weekend",
  },
  {
    idea: "Share a scripture or uplifting quote that might encourage them.",
    when: "Before Sunday",
  },
  {
    idea: "Write a short note or letter of appreciation and drop it off at their home.",
    when: "This week",
  },
  {
    idea: "Invite them to a church activity or a wholesome social event.",
    when: "This month",
  },
  {
    idea: "Ask if there's anything specific they need prayers for.",
    when: "Next time you see them",
  },
  {
    idea: "Send a small, thoughtful gift (cookies, a book, or something related to their interests).",
    when: "This week",
  },
  {
    idea: "Simply call them and have a genuine conversation about life.",
    when: "Sometime this week",
  },
];

const IdeaGeneratorPage: React.FC = () => {
  const [currentIdea, setCurrentIdea] = useState(ideas[0]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate(); // Declare navigate hook

  const generateNewIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setCurrentIdea(ideas[randomIndex]);
  };

  const saveIdea = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000); // Flash green for 1 second

    // Navigate to the Saved Ideas page after saving
    navigate("/SavedIdeas");
  };

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.contentWrapper}>
        <div
          className="d-flex flex-column align-items-center w-100"
          style={{ maxWidth: "600px" }}
        >
          <h1 className={styles.title}>Ministering Idea Generator</h1>

          <div className="w-100">
            <div className="mb-3">
              <label className="form-label d-flex justify-content-start">
                Idea:
              </label>
              <div
                className={`border rounded p-3 text-dark ${
                  isSaved ? styles.savedEffect : "bg-light"
                }`}
              >
                {currentIdea.idea}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label d-flex justify-content-start">
                When:
              </label>
              <div
                className={`border rounded p-3 text-dark ${
                  isSaved ? styles.savedEffect : "bg-light"
                }`}
              >
                {currentIdea.when}
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-between">
              <button
                className={styles.generateButton}
                onClick={generateNewIdea}
              >
                Generate Idea
              </button>
              <button className={styles.saveButton} onClick={saveIdea}>
                Save Idea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaGeneratorPage;
