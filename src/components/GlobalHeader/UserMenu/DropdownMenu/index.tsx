import Link from 'next/link';
import getConfig from 'next/config';
import { GoogleLogout } from 'react-google-login';

import styles from './DropdownMenu.module.scss';

interface IDropdownMenu {
  userName: string | null;
  setLogOut: () => void;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ userName, setLogOut }) => {
  const {
    publicRuntimeConfig: { GOOGLE_CLIENT_ID },
  } = getConfig();
  return (
    <div className={styles.DropdownMenu}>
      <div className={styles.menuWrapper}>
        <div className={styles.userInfo}>{userName}님 환영합니다!</div>
        <Link href='/'>마이페이지</Link>
        <Link href='/'>내 북마크</Link>
        <Link href='/edit'>새 글 작성</Link>
        <Link href='/'>임시글 리스트</Link>
        <Link href='/setting'>설정</Link>
        <div onClick={setLogOut}>
          <GoogleLogout clientId={GOOGLE_CLIENT_ID as string} onLogoutSuccess={setLogOut} render={() => <div className={styles.logout}>로그아웃</div>} />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
