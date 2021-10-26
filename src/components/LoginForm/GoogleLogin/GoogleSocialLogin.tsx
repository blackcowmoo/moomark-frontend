import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useRecoilState } from 'recoil';
import { userSessionAtom } from 'recoil/userSession';
import styles from '../LoginForm.module.scss';

interface props {
  onClose: () => void;
}

const GoogleSocialLogin: React.FC<props> = ({ onClose }) => {
  const [, setUserSession] = useRecoilState(userSessionAtom);
  useEffect(() => {
    console.log(process.env.GOOGLE_OAUTH_CLIENT_ID);
  }, []);

  const onSuccess = (response: any) => {
    console.log(response);
    console.log({ id: response.tokenId, userName: response?.profileObj?.name });
    setUserSession({ id: response.tokenId, userName: response?.profileObj?.name });
    onClose();
  };

  const onFailure = (error: Error) => {
    console.error(error);
  };
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_OAUTH_CLIENT_ID as string}
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
