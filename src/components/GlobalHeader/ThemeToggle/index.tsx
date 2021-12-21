import { useState, useEffect } from 'react';
import Sun from './Sun.svg';
import Moon from './Moon.svg';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

const index = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>('light');
  const inActiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setActiveTheme(localTheme === 'dark' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(inActiveTheme);
  };

  return (
    <div>
      <input type='checkbox' className={styles.checkbox} onChange={toggleTheme} checked={activeTheme === 'dark'} id='chk' />
      <label className={styles.label} htmlFor='chk'>
        <div className={styles.ball}></div>
        <div className={styles.moon}>
          <Moon />
        </div>
        <div className={styles.sun}>
          <Sun />
        </div>
      </label>
    </div>
  );
};

export default index;
