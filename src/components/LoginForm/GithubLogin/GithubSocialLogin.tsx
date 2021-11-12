import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';
import GithubLogo from './GithubLogo.svg';
import styles from './GithubSocialLogin.module.scss';

interface props {
  onClose: () => void;
}

const GithubSocialLogin: React.FC<props> = ({ onClose }) => {
  const [, setUserSession] = useRecoilState(userSessionAtom);
  useEffect(() => {}, []);

  const requestLogin = (response: any) => {
    console.log(process.env.Github);
    setUserSession({ id: response.tokenId, userName: response?.profileObj?.name });
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
