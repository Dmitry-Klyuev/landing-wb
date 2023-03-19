import React from 'react';
import styles from './Achive.module.scss';

export const Achiev= ({children, name}) => {
    return (
        <div className={`${styles.wrapper} ${name === 'one' ? styles.achieve_one : styles.achieve_two}`}>
            <div>
                 {children}
            </div>
        </div>
    );
};