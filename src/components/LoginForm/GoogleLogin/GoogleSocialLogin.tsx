import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';
import { customHeaderAtom } from 'recoil/customHeader';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'api/queries/auth.queries';
import styles from '../LoginForm.module.scss';

interface props {
  onClose: () => void;
}

const GoogleSocialLogin: React.FC<props> = ({ onClose }) => {
  const [customHeader] = useRecoilState(customHeaderAtom);
  const [, setUserSession] = useRecoilState(userSessionAtom);
  const updateUser = (res: any) => {
    console.log(res);
    setUserSession({ id: 'google', userName: 'googleLog' });
  };

  const [login, { data }] = useMutation(LOGIN, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted(res) {
      updateUser(res);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSuccess = (response: any) => {
    console.log(customHeader);
    login({ variables: { type: 'Google', code: response.code } });
    onClose();
  };

  const onFailure = (error: Error) => {
    console.error(error);
  };
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri='/'
      responseType='code'
      render={(renderProps) => (
        <div className={styles.googleBtn} onClick={renderProps.onClick}>
          <div className={styles.iconWrapper}>
            <img className={styles.googleIcon} src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' />
          </div>
          <p className={styles.btnText}>
            <b>google 로그인 / 회원가입</b>
          </p>
        </div>
      )}
    />
  );
};

export default GoogleSocialLogin;
