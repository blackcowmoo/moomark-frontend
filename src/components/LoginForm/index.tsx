import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'api/queries/auth.queries';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';
import styles from './LoginForm.module.scss';
import GoogleLogo from './GoogleLogo.svg';

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
      <form className={styles.emailForm}>
        <div className={styles.form}>
          <label htmlFor='password'>Email</label>
          <input id='email' type='text' placeholder='Email' required />
        </div>
        <div className={styles.form}>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' placeholder='PassWord' required />
        </div>
        <button onClick={setLogin}>Login</button>
      </form>
      <div className={styles.socialForm}>
        <button onClick={setLogin}>
          <GoogleLogo fill='white' />
        </button>
      </div>
    </div>
  );
};

export default LoginFormModal;
