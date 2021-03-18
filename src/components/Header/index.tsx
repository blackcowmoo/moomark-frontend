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
          <div className='user-nav'>
            {/* <div className='user-nav__icon'>
              <img src='/icon/bookmarks.svg' alt='User bookmarks' />
              <span className="user-nav__notification">13</span>
            </div>
            <div className='user-nav__icon'>
              <img src='/icon/bell.svg' alt='User bookmarks' />
              
            </div> */}
            <div className='user-nav__user'>
              <img src='/mockprofile.PNG' alt={'mockNick'} onClick={onToggleDropdown} />
              <i className='arrow'></i>
            </div>
            {isDropdown && (
              <div>
                <div className='dropdown'>
                  <div className='menu-wrapper'>
                    <Link href='/editpost'>마이페이지</Link>
                    <Link href='/editpost'>내 북마크</Link>
                    <Link href='/editpost'>새 글 작성</Link>
                    <Link href='/editpost'>임시글 리스트</Link>
                    <Link href='/editpost'>설정</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
