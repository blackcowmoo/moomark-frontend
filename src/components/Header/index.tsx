import { useState } from 'react';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userSessionAtom, loginUserState } from 'recoil/userSession';
import { GoogleLogout } from 'react-google-login';
import { useModal } from 'utils/hooks/useModal';
import Modal from '@components/common/Modal';
import ModalLoginForm from '@components/LoginForm';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [userSession, setUserSession] = useRecoilState(userSessionAtom);
  const { userName } = useRecoilValue(loginUserState);
  const [isDropdown, setDropdown] = useState(false);
  const { isShown, toggle } = useModal();

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
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='mooMark logo' />
        </Link>
        <form action='#' className={styles.search}>
          <input type='text' className={styles.search__input} placeholder='Search input' />
          <button className={styles.search__button}>
            <img src='/icon/search.svg' alt='search icon' className={styles.search__icon} />
          </button>
        </form>
        {userSession.id ? (
          <div className={styles.userNav}>
            <div className={styles.userNav__icon}>
              <img src='/icon/bookmarks.svg' alt='User bookmarks' />
            </div>
            <div className={styles.userNav__icon}>
              <img src='/icon/bell.svg' alt='User bookmarks' />
            </div>
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
                    <Link href='/'>설정</Link>
                    <div onClick={setLogOut}>
                      <GoogleLogout clientId={process.env.GOOGLE_OAUTH_CLIENT_ID as string} onLogoutSuccess={setLogOut}
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
      <Modal title='mooMark' isShown={isShown} onClose={toggle} content={<ModalLoginForm onClose={toggle} />} />
    </header>
  );
};

export default Header;
