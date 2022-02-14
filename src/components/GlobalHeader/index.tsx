import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userSessionState, loginUserState } from 'recoil/userSession';
import { useModal } from 'utils/hooks/useModal';
import Modal from '@components/common/Modal';
import ModalLoginForm from '@components/LoginForm';
import DropdownMenu from './DropdownMenu';
import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import HttpHeaderModifier from './HttpHeaderModifier';

import SearchLogo from './SearchForm/Search.svg';
import MainLogo from './Logo.svg';
import styles from './GlobalHeader.module.scss';

const GlobalHeader: React.FC = () => {
  const {
    publicRuntimeConfig: { STAGE },
  } = getConfig();

  const [scrollDir, setScrollDir] = useState('up');
  const [isDevEnv, setIsDevEnv] = useState(false);
  const [userSession, setUserSession] = useRecoilState(userSessionState);
  const { userName } = useRecoilValue(loginUserState);
  const [isDropdown, setDropdown] = useState(false);
  const { isShown, toggle } = useModal();

  useEffect(() => {
    if (STAGE === 'dev') setIsDevEnv(true);
  }, []);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const setLogOut = () => {
    setUserSession({ ...userSession, id: null });
    closeDropdown();
  };

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
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                <MainLogo />
              </a>
            </Link>
          </div>
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
          {userSession.id ? (
            <div className={styles.userNav}>
              <div className={styles.userNav__user}>
                <img src='/mockprofile.PNG' alt='mockNick' onClick={toggleDropdown} />
                {isDropdown && <DropdownMenu userName={userName} setLogOut={setLogOut} toggleDropDown={toggleDropdown}/>}
              </div>
            </div>
          ) : (
            <button className={styles.loginButton} onClick={toggle}>
              Login
            </button>
          )}
        </div>
      </div>
      <Modal title='mooMark' isShown={isShown} onClose={toggle} content={<ModalLoginForm onClose={toggle} />} />
    </header>
  );
};

export default GlobalHeader;
