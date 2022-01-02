import { useState, useEffect } from 'react';
import SunIcon from './Sun.svg';
import MoonIcon from './Moon.svg';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark' | null;

const index = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>(null);
  const inActiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  const isTheme = (value: any): value is Theme => {
    return typeof value === 'string' && (value === 'light' || value === 'dark') && typeof value !== 'undefined';
  };

  useEffect(() => {
    // const wlsTheme = window.localStorage.getItem('theme');
    // console.log(wlsTheme, 'LOCALSTORAGE THEME');
    // const theme = isTheme(wlsTheme) ? wlsTheme : 'light';
    const htmlTheme = document.body.dataset.theme;
    const theme = isTheme(htmlTheme) ? htmlTheme : 'light';
    setActiveTheme(theme);
  }, []);

  useEffect(() => {
    console.log(activeTheme, 'USE_Effect  by Changed ActiveTheme');
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
          <div className={styles.sun}>
            <SunIcon />
          </div>
          <div className={styles.moon}>
            <MoonIcon />
          </div>
          <div className={styles.ball} style={{ transform: `translateX(${activeTheme === 'dark' ? '0px' : '24px'})` }}></div>
        </label>
      )}
    </div>
  );
};

export default index;
