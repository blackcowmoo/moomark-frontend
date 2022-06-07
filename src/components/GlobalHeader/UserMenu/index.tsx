import { useState, useRef, useEffect } from 'react';

import useDetectClickOutside from 'utils/hooks/useDetectClickOutside';
import useUser from 'utils/hooks/useUser';
import { getCookie } from 'utils/cookie';
import Button from 'components/common/Button';
import DropdownMenu from './DropdownMenu';

import styles from './UserMenu.module.scss';

interface IUserMenu {
  handleLogin: () => void;
}

const index: React.FC<IUserMenu> = ({ handleLogin }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdown, setDropdown] = useState(false);
  const [user, , logoutUser, { getMe, loading }, refreshUser] = useUser();
  const [loadedUser, setLoadedUser] = useState(false);

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

  useEffect(() => {
    const accessToken = getCookie('access-token');
    const refreshToken = getCookie('refresh-token');
    if (!user.name && accessToken) {
      getMe();
    } else if (!user.name && refreshToken) {
      refreshUser(refreshToken);
    }
    setLoadedUser(true);
  }, []);

  if (!loadedUser || loading) return <div className={styles.wrapper}></div>;

  return user.email ? (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.UserProfile}>
        <img src={user.picture || '/mockprofile.PNG'} alt='mockNick' id='userProfile' onClick={toggleDropdown} />
        {isDropdown && <DropdownMenu userName={user.name} setLogOut={setLogOut} />}
      </div>
    </div>
  ) : (
    <Button onClick={handleLogin} text='로그인' />
  );
};

export default index;
