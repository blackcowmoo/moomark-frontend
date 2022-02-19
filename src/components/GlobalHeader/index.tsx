import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { useModal } from 'utils/hooks/useModal';
import Modal from '@components/common/Modal';
import ModalLoginForm from '@components/LoginForm';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';
import HttpHeaderModifier from './HttpHeaderModifier';

import SearchLogo from './SearchForm/Search.svg';
import MainLogo from './Logo.svg';
import styles from './GlobalHeader.module.scss';

const GlobalHeader: React.FC = () => {
  const {
    publicRuntimeConfig: { STAGE },
  } = getConfig();
  const isDevEnv = STAGE === 'dev';

  const [scrollDir, setScrollDir] = useState('up');
  const { isShown, toggle } = useModal();

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <header className={styles.header} style={{ marginTop: scrollDir === 'down' ? -155 : 0, transition: 'margin 100ms ease-in-out' }}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <a>
              <div className={styles.logo}>
                <MainLogo />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href='/search'>
            <a>
              <div className={styles.logo}>
                <SearchLogo />
              </div>
            </a>
          </Link>
          {isDevEnv && <HttpHeaderModifier />}
          <ThemeToggle />
          <UserMenu handleLogin={toggle} />
        </div>
      </div>
      <Modal title='로그인' isShown={isShown} onClose={toggle} content={<ModalLoginForm onClose={toggle} />} />
    </header>
  );
};

export default GlobalHeader;
