import GoogleSocialLogin from './GoogleLogin/GoogleSocialLogin';
import GithubSocialLogin from './GithubLogin/GithubSocialLogin';
import styles from './LoginForm.module.scss';

interface ModalLoginFormProps {
  onClose: () => void;
}

const LoginFormModal: React.FC<ModalLoginFormProps> = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}>소셜 로그인</div>
      <div className={styles.social}>
        <GoogleSocialLogin onClose={onClose} />
      </div>
      <div className={styles.social}>
        <GithubSocialLogin onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginFormModal;
