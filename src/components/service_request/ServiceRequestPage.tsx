"use client";

import { ServiceRequestForm } from "./ServiceRequestForm";
import styles from "./ServiceRequestPage.module.css";

export const ServiceRequestPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerContent}></div>
      </div>
      <main className={styles.main}>
        <ServiceRequestForm />
      </main>
    </div>
  );
};

export default ServiceRequestPage;
