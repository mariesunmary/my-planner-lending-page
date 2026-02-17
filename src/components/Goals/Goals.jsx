import React from 'react';
import styles from './Goals.module.scss';

const Goals = () => {
    return (
        <section id="goals" className={styles.goals}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.mainGoal}>
                        <h2>Мета проєкту</h2>
                        <p>
                            Створити сучасний застосунок для планування часу, відстеження звичок і фінансів,
                            який допомагає користувачам підтримувати баланс між роботою, навчанням і відпочинком.
                        </p>
                    </div>

                    <div className={styles.taskList}>
                        <h3>Основні завдання</h3>
                        <div className={styles.taskItem}>
                            <span className={styles.number}>1</span>
                            <p>Проаналізувати існуючі рішення (Notion, Todoist, Habitica) та виявити їх недоліки.</p>
                        </div>
                        <div className={styles.taskItem}>
                            <span className={styles.number}>2</span>
                            <p>Розробити дизайн-систему, що сприяє концентрації та зменшує візуальний шум.</p>
                        </div>
                        <div className={styles.taskItem}>
                            <span className={styles.number}>3</span>
                            <p>Реалізувати ключові модулі: планування тижня, трекер звичок, бюджет та проєкти.</p>
                        </div>
                        <div className={styles.taskItem}>
                            <span className={styles.number}>4</span>
                            <p>Забезпечити кросплатформеність та адаптивність веб-застосунку.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
