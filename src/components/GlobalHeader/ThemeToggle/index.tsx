import { useState, useEffect } from 'react';
import SunIcon from './Sun.svg';
import MoonIcon from './Moon.svg';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark' | null;

const index = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>(null);
  const inActiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setActiveTheme(localTheme === 'dark' ? 'dark' : 'light');
  }, []);

  const isTheme = (value: any): value is Theme => {
    return typeof value === 'string' && (value === 'light' || value === 'dark');
  };

  useEffect(() => {
    if (activeTheme === null) {
      const localTheme = localStorage.getItem('theme');
      isTheme(localTheme) ? setActiveTheme(localTheme) : setActiveTheme('light');
    }
  }, []);

  useEffect(() => {
    if (activeTheme) {
      document.body.dataset.theme = activeTheme;
      localStorage.setItem('theme', activeTheme);
    }
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(inActiveTheme);
  };

  return (
    <div className={styles.container}>
      <input type='checkbox' className={styles.checkbox} onChange={toggleTheme} checked={activeTheme === 'dark'} id='chk' />
      {activeTheme && (
        <label className={styles.label} htmlFor='chk'>
          <div className={styles.ball}></div>
          <div className={styles.moon}>
            <MoonIcon />
          </div>
          <div className={styles.sun}>
            <SunIcon />
          </div>
        </label>
      )}
    </div>
  );
};

export default index;
