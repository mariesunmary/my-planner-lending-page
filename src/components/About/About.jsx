import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <h2>Актуальність</h2>
                        <p>
                            У сучасному світі студенти та фрілансери стикаються з проблемою вигорання через
                            невміння балансувати між роботою та відпочинком.
                        </p>
                        <p>
                            FocusFlow — це не просто планувальник, це інструмент для підтримки ментального здоров'я
                            через розумне планування. Ми допомагаємо структурувати день так, щоб ви були
                            продуктивними, але не виснаженими.
                        </p>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <h3>Balance First</h3>
                            <p>Нагадування про відпочинок, а не тільки про дедлайни.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>All-in-One</h3>
                            <p>Звички, бюджет, проєкти та цілі в одному місці.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Smart Analytics</h3>
                            <p>Аналітика, що дає інсайти, а не просто графіки.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Calm Design</h3>
                            <p>Інтерфейс, що не відволікає та заспокоює.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
