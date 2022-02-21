import { useState, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import useDetectClickOutside from 'utils/hooks/useDetectClickOutside';
import { loginUserState, userSessionState } from 'recoil/userSession';
import DropdownMenu from './DropdownMenu';

import styles from './UserMenu.module.scss';

interface IUserMenu {
  handleLogin: () => void;
}

const index: React.FC<IUserMenu> = ({ handleLogin }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdown, setDropdown] = useState(false);
  const { userName } = useRecoilValue(loginUserState);
  const [userSession, setUserSession] = useRecoilState(userSessionState);

  const closeDropdown = () => {
    setDropdown(false);
  };

  useDetectClickOutside(ref, closeDropdown);

  const setLogOut = () => {
    setUserSession({ ...userSession, id: null });
    closeDropdown();
  };
  const toggleDropdown = () => {
    console.log('toggle');
    setDropdown((prev) => !prev);
  };

  return userSession.id ? (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.UserProfile}>
        <img src='/mockprofile.PNG' alt='mockNick' id='userProfile' onClick={toggleDropdown} />
        {isDropdown && <DropdownMenu userName={userName} setLogOut={setLogOut} />}
      </div>
    </div>
  ) : (
    <button className={styles.LoginButton} onClick={handleLogin}>
      Login
    </button>
  );
};

export default index;
