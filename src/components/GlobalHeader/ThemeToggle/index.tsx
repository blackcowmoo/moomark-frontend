import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { globalThemeState, Theme } from 'recoil/globalTheme';

import SunIcon from './Sun.svg';
import MoonIcon from './Moon.svg';

import styles from './ThemeToggle.module.scss';


const index = () => {
  const [theme, setTheme] = useRecoilState(globalThemeState);

  const isTheme = (value: any): value is Theme => {
    return typeof value === 'string' && (value === 'light' || value === 'dark') && typeof value !== 'undefined';
  };

  useEffect(() => {
    const htmlTheme = document.body.dataset.theme;
    const theme = isTheme(htmlTheme) ? htmlTheme : 'light';
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.dataset.theme = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.container}>
      <input type='checkbox' className={styles.checkbox} onChange={toggleTheme} checked={theme === 'dark'} id='chk' />
      {theme && (
        <label className={styles.label} htmlFor='chk'>
          <div className={styles.sun}>
            <SunIcon />
          </div>
          <div className={styles.moon}>
            <MoonIcon />
          </div>
          <div className={styles.ball} style={{ transform: `translateX(${theme === 'dark' ? '0px' : '24px'})` }}></div>
        </label>
      )}
    </div>
  );
};

export default index;
