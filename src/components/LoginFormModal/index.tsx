import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { DEV_LOGIN } from 'api/queries/postData.queries';
import { useAuth } from 'context/authContext';

interface ModalLoginFormProps {
  onClose: () => void;
}

const ModalLoginForm: React.FC<ModalLoginFormProps> = ({ onClose }) => {
  const { login } = useAuth();
  const [mutationLogin, { data, loading }] = useMutation(DEV_LOGIN);
  const setLogin = () => {
    mutationLogin();
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      login();
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

export default ModalLoginForm;
