import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'api/queries/auth.queries';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';

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
    <>
      <div className='login-form'>
        <div className='header-text'>LogIn MooMark</div>
        <input type='text' placeholder='Your Email Address' />
        <input type='password' placeholder='PassWord' />
        <input type='checkbox' id='terms' />
        <p>Remember me</p>
        <button onClick={setLogin}>Login</button>
      </div>
    </>
  );
};

export default LoginFormModal;
