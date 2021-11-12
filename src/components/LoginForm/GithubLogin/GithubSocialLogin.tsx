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
  const loginUri: string = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000`;
  useEffect(() => {
  }, []);

  const requestLogin = () => {
    console.log(loginUri);
  }

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
