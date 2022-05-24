import useUser from 'utils/hooks/useUser';

import GithubLogo from '@components/svg/GithubLogo.svg';
import styles from './GithubSocialLogin.module.scss';

interface props {
  onClose: () => void;
}

const GithubSocialLogin: React.FC<props> = ({ onClose }) => {
  const [, loginUser] = useUser();

  const requestLogin = () => {
    // loginUser('gitHub', response.code);
    // Test-code
    loginUser('Google', 'test-1234');
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
          {/* <b>github 로그인 / 회원가입</b> */}
          <b>test 로그인 / 회원가입</b>
        </p>
      </div>
    </>
  );
};

export default GithubSocialLogin;
