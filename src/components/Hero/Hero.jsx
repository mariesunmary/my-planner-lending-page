import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>Welcome to <span>FocusFlow</span></h1>
                    <p className={styles.subtitle}>
                        Твій особистий простір для планування часу, відстеження звичок і фінансів.
                        Баланс між роботою, навчанням і відпочинком.
                    </p>
                    <a href="#about" className={styles.ctaButton}>Дізнатися більше</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
