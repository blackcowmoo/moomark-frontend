import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { DEV_LOGIN } from 'queries/postData.queries';
import Link from 'next/link';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [login, { loading, data }] = useMutation(DEV_LOGIN);
  const [isDropdown, setDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const toggleDropdown = useCallback(() => {
    setDropdown((prev) => !prev);
  }, []);
  const setLogOut = useCallback(() => {
    setIsLogin(false);
  }, []);
  const setLogin = useCallback(() => {
    login();
    console.log(data);
    setIsLogin(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='mooMark logo' />
        </Link>
        {loading && 'loading'}
        <form action='#' className={styles.search}>
          <input type='text' className={styles.search__input} placeholder='Search input' />
          <button className={styles.search__button}>
            <img src='/icon/search.svg' alt='search icon' className={styles.search__icon} />
          </button>
        </form>
        {isLogin ? (
          <div className={styles.userNav}>
            <div className={styles.userNav__icon}>
              <img src='/icon/bookmarks.svg' alt='User bookmarks' />
            </div>
            <div className={styles.userNav__icon}>
              <img src='/icon/bell.svg' alt='User bookmarks' />
            </div>
            <div className={styles.userNav__user}>
              <img src='/mockprofile.PNG' alt={'mockNick'} onClick={toggleDropdown} />
              {isDropdown && (
                <div>
                  <div className={styles.dropdown}>
                    <div className={styles.menuWrapper}>
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
          <button className={styles.loginButton} onClick={setLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
