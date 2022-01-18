import { useEffect, useState, useCallback } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userSessionState, loginUserState } from 'recoil/userSession';
import { GoogleLogout } from 'react-google-login';
import { useModal } from 'utils/hooks/useModal';
import Modal from '@components/common/Modal';
import ModalLoginForm from '@components/LoginForm';
import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import HttpHeaderModifier from './HttpHeaderModifier';

import SearchLogo from './SearchForm/Search.svg';
import MainLogo from './Logo.svg';
import styles from './GlobalHeader.module.scss';

const GlobalHeader: React.FC = () => {
  const {
    publicRuntimeConfig: { STAGE, GOOGLE_CLIENT_ID },
  } = getConfig();

  const [isDevEnv, setIsDevEnv] = useState(false);
  const [userSession, setUserSession] = useRecoilState(userSessionState);
  const { userName } = useRecoilValue(loginUserState);
  const [isDropdown, setDropdown] = useState(false);
  const { isShown, toggle } = useModal();
  const [isUp, setIsUp] = useState(true);
  const [y, setY] = useState(0);
  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsUp(true);
      } else if (y < window.scrollY) {
        setIsUp(false);
      }
      setY(window.scrollY);
    },
    [y],
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (STAGE === 'dev') setIsDevEnv(true);
    setY(window.scrollY);
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

  return (
    <header className={styles.header} style={{ marginTop: isUp ? 0 : -y }}>
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
        <SearchForm />
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
                {isDropdown && (
                  <div className={styles.dropdown} onClick={closeDropdown}>
                    <div className={styles.menuWrapper}>
                      <div className={styles.userInfo}>{userName}님 환영합니다!</div>
                      <Link href='/'>마이페이지</Link>
                      <Link href='/'>내 북마크</Link>
                      <Link href='/edit'>새 글 작성</Link>
                      <Link href='/'>임시글 리스트</Link>
                      <Link href='/setting'>설정</Link>
                      <div onClick={setLogOut}>
                        <GoogleLogout
                          clientId={GOOGLE_CLIENT_ID as string}
                          onLogoutSuccess={setLogOut}
                          render={() => <div className={styles.logout}>로그아웃</div>}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
