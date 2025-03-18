import React from "react";
import styles from "./NavigationHeader.module.css";

export const NavigationHeader = () => {
  return (
    <nav className={styles.navHeader}>
      <button className={styles.menuButton} aria-label="Menu">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 25.5V22.6667H29.75V25.5H4.25ZM4.25 18.4167V15.5833H29.75V18.4167H4.25ZM4.25 11.3333V8.5H29.75V11.3333H4.25Z"
            fill="white"
          />
        </svg>
      </button>
      <button className={styles.userButton} aria-label="User profile">
        <svg
          width="33"
          height="36"
          viewBox="0 0 33 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.1667 25.375V22.9583C26.1667 21.6765 25.6575 20.4471 24.7511 19.5407C23.8446 18.6342 22.6153 18.125 21.3334 18.125H11.6667C10.3848 18.125 9.15545 18.6342 8.24902 19.5407C7.3426 20.4471 6.83337 21.6765 6.83337 22.9583V25.375M21.3334 8.45833C21.3334 11.1277 19.1694 13.2917 16.5 13.2917C13.8307 13.2917 11.6667 11.1277 11.6667 8.45833C11.6667 5.78896 13.8307 3.625 16.5 3.625C19.1694 3.625 21.3334 5.78896 21.3334 8.45833Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h1 className={styles.title}>Service Request</h1>
    </nav>
  );
};

export default NavigationHeader;
