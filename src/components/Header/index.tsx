import { useState } from 'react';
import Link from 'next/link';
import { useModal } from 'hooks/useModal';
import { useAuth } from 'context/authContext';
import Modal from '@components/common/Modal';
import ModalLoginForm from '@components/LoginFormModal';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isDropdown, setDropdown] = useState(false);
  const { isShown, toggle } = useModal();

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const setLogOut = () => {
    logout();
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
        {user ? (
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
                <div>
                  <div className={styles.dropdown} onClick={closeDropdown}>
                    <div className={styles.menuWrapper}>
                      <div className={styles.userInfo}>{user}님 환영합니다!</div>
                      <Link href='/'>마이페이지</Link>
                      <Link href='/'>내 북마크</Link>
                      <Link href='/edit'>새 글 작성</Link>
                      <Link href='/'>임시글 리스트</Link>
                      <Link href='/'>설정</Link>
                      <div onClick={setLogOut}>로그아웃</div>
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
      <Modal title='ddd' isShown={isShown} onClose={toggle} content={<ModalLoginForm onClose={toggle} />} />
    </header>
  );
};

export default Header;
