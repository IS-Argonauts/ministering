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

        {/* Name Title */}
        <section className="p-5 mt-8 rounded-xl bg-zinc-300">
        <div className={styles.profileImageWrapper}>
  <img
    src="src/images/Larry.jpeg"
    alt="Larry Smith"
    className={styles.profileImage}
  />
</div>



          <h1 className="text-2xl font-bold text-black">
            Larry Smith
          </h1>
        </section>

        <h1 className="mt-6 mb-3 text-2xl font-semibold text-black">
          Personal Information
        </h1>

        <section className={styles.personalInfoCard}>
          <div className={styles.infoRow}>
            <p className={styles.label}>Birthday</p>
            <p className={styles.value}>March 27, 1995</p>
          </div>
          <div className={styles.infoRow}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>801-555-1111</p>
          </div>
          <div className={styles.infoRow}>
            <p className={styles.label}>Address</p>
            <p className={styles.value}>446 Aspen Ct, Provo, UT 84604</p>
          </div>
        </section>

        <br/>
     
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
              <img src="src/images/Keith.jpg" alt="Keith Carney" />
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


      </section>
    </main>
  );
}
