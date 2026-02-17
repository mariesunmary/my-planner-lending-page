import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <a href="#" className={styles.logo}>FocusFlow</a>
                    <ul className={styles.navList}>
                        <li><a href="#about" className={styles.navLink}>Про проєкт</a></li>
                        <li><a href="#goals" className={styles.navLink}>Мета</a></li>
                        <li><a href="#methodology" className={styles.navLink}>Методологія</a></li>
                        <li><a href="#results" className={styles.navLink}>Результати</a></li>
                        <li><a href="#contacts" className={styles.navLink}>Контакти</a></li>
                        <li>
                            <button
                                className={styles.themeToggle}
                                onClick={toggleTheme}
                                aria-label="Toggle dark mode"
                            >
                                {theme === 'light' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
