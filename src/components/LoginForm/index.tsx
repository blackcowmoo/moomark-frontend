import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'api/queries/auth.queries';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';
import GoogleSocialLogin from './GoogleSocialLogin';
import styles from './LoginForm.module.scss';

interface ModalLoginFormProps {
  onClose: () => void;
}

const LoginFormModal: React.FC<ModalLoginFormProps> = ({ onClose }) => {
  const [, setUserSession] = useRecoilState(userSessionAtom);
  const [mutationLogin, { data, loading }] = useMutation(LOGIN);
  const setLogin = () => {
    mutationLogin().then((res) => {
      const userSession = res.data?.login ?? null;
      setUserSession({ ...userSession, id: userSession, userName: 'mock' });
    });
  };

  useEffect(() => {
    if (data) {
      onClose();
    }
  }, [data, loading]);

  return (
    <div className={styles.container}>
      <div className={styles.divider}>소셜 로그인</div>
      <div className={styles.social}>
        <GoogleSocialLogin onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginFormModal;
