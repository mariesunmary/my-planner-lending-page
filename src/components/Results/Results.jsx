import React from 'react';
import styles from './Results.module.scss';
import weeklyImg from '../../assets/images/weeklytodolist.png';
import habitImg from '../../assets/images/habittracker.png';
import budgetImg from '../../assets/images/monthlybudget.png';
import projectImg from '../../assets/images/projectplanner.png';

const Results = () => {
    const modules = [
        {
            title: 'Weekly To-Do',
            desc: 'Інтуїтивне планування завдань на тиждень без зайвого шуму.',
            color: '#4A90E2',
            image: weeklyImg
        },
        {
            title: 'Habit Tracker',
            desc: 'Формування корисних звичок з візуалізацією прогресу.',
            color: '#50E3C2',
            image: habitImg
        },
        {
            title: 'Monthly Budget',
            desc: 'Контроль фінансів: доходи, витрати та аналітика.',
            color: '#F5A623',
            image: budgetImg
        },
        {
            title: 'Project Planner',
            desc: 'Керування великими проєктами та дедлайнами.',
            color: '#9013FE',
            image: projectImg
        }
    ];

    return (
        <section id="results" className={styles.results}>
            <div className="container">
                <h2>Очікувані результати</h2>
                <div className={styles.intro}>
                    <p>
                        Результатом роботи є веб-застосунок FocusFlow, що об'єднує чотири ключові модулі
                        для повноцінного керування життям.
                    </p>
                </div>
                <div className={styles.modules}>
                    {modules.map((mod, index) => (
                        <div key={index} className={styles.moduleCard}>
                            <div
                                className={styles.imageContainer}
                                style={{ backgroundColor: mod.color + '10' }}
                            >
                                <img src={mod.image} alt={mod.title} loading="lazy" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 style={{ color: mod.color }}>{mod.title}</h3>
                                <p>{mod.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
