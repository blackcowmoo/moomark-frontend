import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userSessionState } from 'recoil/userSession';
import GithubLogo from './GithubLogo.svg';
import styles from './GithubSocialLogin.module.scss';

interface props {
  onClose: () => void;
}

const GithubSocialLogin: React.FC<props> = ({ onClose }) => {
  const [, setUserSession] = useRecoilState(userSessionState);
  useEffect(() => {}, []);

  const requestLogin = (response: any) => {
    console.log(response);
    setUserSession({ id: 'githubLogin', userName: 'mock_github' });
    onClose();
  };

  return (
    <>
      <div className={styles.githubBtn} onClick={requestLogin}>
        <div className={styles.iconWrapper}>
          <div className={styles.githubIcon}>
            <GithubLogo />
          </div>
        </div>
        <p className={styles.btnText}>
          <b>github 로그인 / 회원가입</b>
        </p>
      </div>
    </>
  );
};

export default GithubSocialLogin;
