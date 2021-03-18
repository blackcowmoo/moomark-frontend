import { useState, useCallback } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isDropdown, setDropdown] = useState(false);
  const onToggleDropdown = useCallback(() => {
    setDropdown((prev) => !prev);
  }, []);
  const isLogin: boolean = true;
  // const toogleDropdown = () => {
  //   document.getElementById('dropdown');
  //   classList.toggle('show');
  // }
  return (
    <header className='header'>
      <div className='header-container'>
        <Link href='/'>
          <img className='logo' src='/logo.svg' alt='mooMark logo' />
        </Link>
        <form action='#' className='search'>
          <input type='text' className='search__input' placeholder='Search input' />
          <button className='search__button'>
            <img src='/icon/search.svg' alt='search icon' className='search__icon' />
            {/* <svg className="search__icon">
        <use xlinkHref='/icon/search.svg'></use>
      </svg> */}
          </button>
        </form>
        {isLogin && (
          <nav className='user-nav'>
            <div className='user-nav__icon'>
              <img src='/icon/bookmarks.svg' alt='User bookmarks' />
            </div>
            <div className='user-nav__icon'>
              <img src='/icon/bell.svg' alt='User bookmarks' />
            </div>
            <div className='user-nav__user'>
              <img src='/mockprofile.PNG' alt={'mockNick'} onClick={onToggleDropdown} />
              <i className='arrow'></i>
              {/* <span className='user-nav__user-name'>mockNick</span> */}
            </div>
          </nav>
        )}
      </div>
      {isDropdown && isLogin && (
        <div className='dropdown'>
          <ul>
            <li>
              <Link href='/editpost'>내 블로그</Link>
            </li>
            <li>
              <Link href='/editpost'>새 글 작성</Link>
            </li>
            <li>
              <Link href='/editpost'>임시글 리스트</Link>
            </li>
            <li>
              <Link href='/editpost'>환경설정</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
