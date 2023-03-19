import React from 'react';
import styles from './Bonus.module.scss'

export const Bonus = () => {
  return (
    <div className={styles.bonus}>
      Бонус <span className='yellowText'>ТОП-3</span> ошибки в настройке внутренней рекламы
      <div className={styles.icon}></div>
    </div>
  );
};
