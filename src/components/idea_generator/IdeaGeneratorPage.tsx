"use client";

// import React, { useState } from "react";
import styles from "./IdeaGeneratorPage.module.css";
import { NavigationHeader } from "../shared_components/Header";

export const IdeaGeneratorPage = () => {
  return (
    <>
      <NavigationHeader />

      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <br />
          <br />

          <h1 className={styles.title}>Idea Generator</h1>

          <br />
          <br />

          <div className="w-100" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label className="form-label d-flex justify-content-start">
                Idea:
              </label>{" "}
              {/* Ensures label is left-aligned */}
              <div className="border rounded p-3 bg-light text-dark">
                {/* Replace with backend data */}
                Your idea goes here
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label d-flex justify-content-start">
                When:
              </label>{" "}
              {/* Ensures label is left-aligned */}
              <div className="border rounded p-3 bg-light text-dark">
                {/* Replace with backend data */}
                Date goes here
              </div>
            </div>
            <br />

            <div className="d-flex gap-3 justify-content-between">
              <button className={styles.generateButton}>Generate Idea</button>
              <button className={styles.saveButton}>Save Idea</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaGeneratorPage;
