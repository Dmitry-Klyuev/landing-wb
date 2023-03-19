import React from 'react';
import styles from './Footer.module.scss'
import {Logo} from "../Logo/Logo";

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Logo/>
            </div>

            <div className={styles.contacts}>
                <div className={styles.number}>+79869180338</div>
                <div className={styles.info}>
                    ИП Ильин Михаил Вадимович <br/>
                    ОГРНИП 323169000003244 <br/>
                    ИНН 166008814469
                </div>

            </div>
        </div>
    );
};
