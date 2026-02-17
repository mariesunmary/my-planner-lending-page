import React from 'react';
import styles from './Methodology.module.scss';

const Methodology = () => {
    return (
        <section id="methodology" className={styles.methodology}>
            <div className="container">
                <h2>Методологія дослідження</h2>
                <div className={styles.steps}>
                    <div className={styles.stepCard}>
                        <div className={styles.icon}>1</div>
                        <div className={styles.content}>
                            <h3>Аналіз проблеми</h3>
                            <p>Вивчення потреб аудиторії та існуючих рішень на ринку.</p>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.icon}>2</div>
                        <div className={styles.content}>
                            <h3>Проєктування</h3>
                            <p>Розробка структури, UX/UI дизайну та архітектури застосунку.</p>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.icon}>3</div>
                        <div className={styles.content}>
                            <h3>Імплементація</h3>
                            <p>Написання коду з використанням React та сучасних веб-технологій.</p>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.icon}>4</div>
                        <div className={styles.content}>
                            <h3>Тестування</h3>
                            <p>Перевірка функціоналу та відповідності вимогам доступності.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
