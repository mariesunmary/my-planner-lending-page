import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>FocusFlow</h3>
                        <p>
                            Бакалаврська робота на тему розробки веб-застосунку для планування часу.
                        </p>
                    </div>
                    <div className={styles.contacts}>
                        <h4>Контакти</h4>
                        <p>Email: <a href="mailto:m.shkryabynets@student.sumdu.edu.ua">m.shkryabynets@student.sumdu.edu.ua</a></p>
                        <p>GitHub: <a href="https://github.com/your-username/focus-flow" target="_blank" rel="noopener noreferrer">github.com/focus-flow</a></p>
                        <p>Університет: СумДУ</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2024 FocusFlow. Всі права захищено.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
