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
        src="src/images/Keith.jpg"
        alt="Keith Carney"
        className={styles.profileImage}
      />
    </div>

    <h1 className="text-2xl font-bold text-black">Keith Carney</h1>
  </div>

  {/* Personal Information */}
  <h1 className="mt-6 mb-3 text-2xl font-semibold text-black">
    Personal Information
  </h1>

  <section className={styles.personalInfoCard}>
    <div className={styles.infoRow}>
      <p className={styles.label}>Birthday</p>
      <p className={styles.value}>May 14, 1988</p>
    </div>
    <div className={styles.infoRow}>
      <p className={styles.label}>Phone</p>
      <p className={styles.value}>435-671-9187</p>
    </div>
    <div className={styles.infoRow}>
      <p className={styles.label}>Address</p>
      <p className={styles.value}>456 E 200 N, Provo, Utah 84606-3210</p>
    </div>
  </section>

  <br />

{/* Ministering Companion */}
<section className={styles.assignmentSection}>
  <h2>Ministering Companion</h2>
  <div className={styles.cardScroll}>
    <div className={styles.card}>
      <img src="src/images/thomas.jpg" alt="Thomas Greene" />
      <h3>Thomas Greene</h3>
      <p>Contact: 385-777-1222</p>
      <p>Address: 880 W 200 S, Provo, UT</p>
      <p>Birthday: August 3, 1981</p>
    </div>
  </div>
</section>

{/* Ministerees */}
<section className={styles.assignmentSection}>
  <h2>Ministerees</h2>
  <div className={styles.cardScroll}>
    <div className={styles.card}>
      <img src="src/images/jacob.jpg" alt="Jacob Pratt" />
      <h3>Jacob Pratt</h3>
      <p>Contact: 801-222-4444</p>
      <p>Address: 75 E 100 N, Provo, UT</p>
      <p>Birthday: September 19, 1992</p>
    </div>

    <div className={styles.card}>
      <img src="src/images/rachel.jpg" alt="Rachel Foster" />
      <h3>Rachel Foster</h3>
      <p>Contact: 801-333-9876</p>
      <p>Address: 64 W 500 S, Provo, UT</p>
      <p>Birthday: February 10, 1990</p>
    </div>
  </div>
</section>

</section>


    </main>
  );
}
