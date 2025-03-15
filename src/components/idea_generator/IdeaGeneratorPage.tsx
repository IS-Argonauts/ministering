"use client";

import React, { useState } from "react";
import { TextareaField } from "./TextareaField";
import styles from "./IdeaGeneratorPage.module.css";
import { NavigationHeader } from "../shared_components/Header";

export const IdeaGeneratorPage = () => {
  const [idea, setIdea] = useState("");
  const [when, setWhen] = useState("");

  const handleGenerateIdea = () => {
    // Implementation for generating idea
    console.log("Generating idea...");
  };

  const handleSaveIdea = () => {
    // Implementation for saving idea
    console.log("Saving idea:", { idea, when });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <NavigationHeader />
        </div>
      </header>

      <h1 className={styles.title}>Idea Generator</h1>

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.formSection}>
            <TextareaField
              label="Idea:"
              value={idea}
              onChange={setIdea}
              placeholder="Enter your idea"
            />

            <TextareaField
              label="When:"
              value={when}
              onChange={setWhen}
              placeholder="Enter when"
            />

            <div className={styles.buttonContainer}>
              <button
                onClick={handleGenerateIdea}
                className={styles.generateButton}
              >
                Generate Idea
              </button>
              <button onClick={handleSaveIdea} className={styles.saveButton}>
                Save Idea
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IdeaGeneratorPage;
