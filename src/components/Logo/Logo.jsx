import React from 'react';
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <h2>SEOguard</h2>
        <div className={styles.description}>Агентство помощи селлерам на Wildberries</div>
      </div>
    </div>
  );
};
