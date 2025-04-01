"use client";
import React from "react";
import styles from "./components.module.css";


export default function MemberProfile() {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
     <section className="px-5 pb-5">
        <h1 className="mt-5 mb-8 text-2xl font-medium text-black">
          Member Info
        </h1>

        {/* Profile Photo */}
        <div className="p-5 mt-8 rounded-xl bg-zinc-300">
          <div className={styles.profileImageWrapper}>
            <img
              src="src/images/stockPhoto1.jpg"  // update with Jane’s photo path
              alt="Jane Ludwig"
              className={styles.profileImage}
            />
          </div>

          <h1 className="text-2xl font-bold text-black">Jane Ludwig</h1>
        </div>

        {/* Personal Information */}
        <h1 className="mt-6 mb-3 text-2xl font-semibold text-black">
          Personal Information
        </h1>

        <section className={styles.personalInfoCard}>
          <div className={styles.infoRow}>
            <p className={styles.label}>Birthday</p>
            <p className={styles.value}>April 16, 1998</p>
          </div>
          <div className={styles.infoRow}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>358-124-5546</p>
          </div>
          <div className={styles.infoRow}>
            <p className={styles.label}>Address</p>
            <p className={styles.value}>270 Wisp Avenue Provo, UT, 84604</p>
          </div>
        </section>

        <br />

        {/* Ministering Companion */}
        <section className={styles.assignmentSection}>
          <h2>Ministering Companion</h2>
          <div className={styles.cardScroll}>
            <div className={styles.card}>
              <img src="src/images/rachel.jpg" alt="Rachel Foster" />
              <h3>Rachel Foster</h3>
              <p>Contact: 801-333-9876</p>
              <p>Address: 64 W 500 S, Provo, UT</p>
              <p>Birthday: February 10, 1990</p>
            </div>
          </div>
        </section>

        {/* Ministerees */}
        <section className={styles.assignmentSection}>
          <h2>Ministering Assignments</h2>
          <div className={styles.cardScroll}>
            <div className={styles.card}>
              <img src="src/images/Lisa.jpeg" alt="Lisa" />
              <h3>Lisa Christensen</h3>
              <p>Contact: 801-555-1111</p>
              <p>Address: 177 Juniper Dr, Provo, UT 84604</p>
              <p>Birthday: September 2, 1974</p>
            </div>

            <div className={styles.card}>
              <img src="src/images/Joanne.jpeg" alt="Joanne Smith" />
              <h3>Joanne Jensen</h3>
              <p>Contact: 801-232-5535</p>
              <p>Address: 446 Aspen Ct, Provo, UT 84604</p>
              <p>Birthday: April 12, 1964</p>
            </div>
          </div>
        </section>
      </section>

    </main>
  );
}
