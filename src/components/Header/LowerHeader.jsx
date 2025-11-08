import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css"; 

const LowerHeader = () => {
  return (
    <nav className={styles.lowerHeader}>
      <div className={styles.option}>
        <FaBars className={styles.icon} />
        <span>All</span>
      </div>
      <div className={styles.option}>Today's Deals</div>
      <div className={styles.option}>Customer Service</div>
      <div className={styles.option}>Registry</div>
      <div className={styles.option}>Gift Cards</div>
      <div className={styles.option}>Sell</div>
    </nav>
  );
};

export default LowerHeader;
