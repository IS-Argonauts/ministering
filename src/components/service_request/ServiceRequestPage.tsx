"use client";

import React from "react";
import { StatusBar } from "./StatusBar";
import { NavigationHeader } from "../shared_components/NavigationHeader";
import { ServiceRequestForm } from "./ServiceRequestForm";
import styles from "./ServiceRequestPage.module.css";

export const ServiceRequestPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <StatusBar />
          <NavigationHeader />
        </div>
      </div>
      <main className={styles.main}>
        <ServiceRequestForm />
      </main>
    </div>
  );
};

export default ServiceRequestPage;
