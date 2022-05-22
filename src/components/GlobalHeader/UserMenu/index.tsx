import { useState, useRef } from 'react';

import useDetectClickOutside from 'utils/hooks/useDetectClickOutside';
import useUser from 'utils/hooks/useUser';
import DropdownMenu from './DropdownMenu';

import styles from './UserMenu.module.scss';

interface IUserMenu {
  handleLogin: () => void;
}

const index: React.FC<IUserMenu> = ({ handleLogin }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdown, setDropdown] = useState(false);
  const { currentUser, logoutUser } = useUser();

  const closeDropdown = () => {
    setDropdown(false);
  };

  useDetectClickOutside(ref, closeDropdown);

  const setLogOut = () => {
    logoutUser();
    closeDropdown();
  };
  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return currentUser.name ? (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.UserProfile}>
        <img src='/mockprofile.PNG' alt='mockNick' id='userProfile' onClick={toggleDropdown} />
        {isDropdown && <DropdownMenu userName={currentUser.name} setLogOut={setLogOut} />}
      </div>
    </div>
  ) : (
    <button className={styles.LoginButton} onClick={handleLogin}>
      Login
    </button>
  );
};

export default index;
