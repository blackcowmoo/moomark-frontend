import React, { useState, useEffect } from 'react';

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

  return <div>
    <span onClick={toggleTheme}>{activeTheme === 'light' ? '🌞' : '🌙'}</span>
  </div>;
};

export default index;
