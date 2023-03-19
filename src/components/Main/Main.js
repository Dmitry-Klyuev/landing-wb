import React from 'react';
import styles from './Main.module.scss'
import person from '../../assets/person.png'
import {Bonus} from "../Bonus/Bonus";
import {Achiev} from "../Achiev/Achiev";

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.time}>24-25 марта</div>
                <h1 className={styles.title}>БЕСПЛАТНЫЙ <br/> <span>МАРАФОН ПО ВБ</span></h1>
                <div className={styles.waitingForYou}>
                    <p>ВАС ЖДЕТ:</p>
                    <p>Как увеличить продажи? связка
                        <br/> по выводу товара <span>на первую страницу</span></p>
                    <p>Живые встречи <br/> с основателем <span>seoguard</span></p>
                </div>
                <div className={styles.mobileAchiev}>
                    <Achiev children={"личный рекорд вывод \n товара в топ-30 за 4 дня"}
                            name={'one'}
                    />
                    <Achiev children={"помог более 150 селлерам \n вырасти минимум в 1.7 раз"}/>
                </div>
                <a className={styles.btn} href="https://t.me/proseonawb">Зарегистрироваться </a>
                <Bonus/>

            </div>
            <div className={styles.person}>
                <img src={person} alt="person"/>
                <Achiev children={"личный рекорд вывод \n товара в топ-30 за 4 дня"}
                        name={'one'}
                />
                <Achiev children={"помог более 150 селлерам \n вырасти минимум в 1.7 раз"}/>
            </div>
        </div>
    );
};