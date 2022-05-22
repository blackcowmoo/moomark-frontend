import getConfig from 'next/config';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import useUser from 'utils/hooks/useUser';
import GoogleLogo from '@components/svg/GoogleLogo.svg';

import styles from '../LoginForm.module.scss';

interface props {
  onClose: () => void;
}

const GoogleSocialLogin: React.FC<props> = ({ onClose }) => {
  const { loginUser } = useUser();
  const {
    publicRuntimeConfig: { GOOGLE_CLIENT_ID },
  } = getConfig();

  const onSuccess = ({ code }: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (code) {
      loginUser('Google', code);
      onClose();
    }
  };

  const onFailure = (error: Error) => {
    console.error(error);
  };
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID as string}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri='/post'
      responseType='code'
      render={(renderProps) => (
        <div className={styles.googleBtn} onClick={renderProps.onClick}>
          <div className={styles.iconWrapper}>
            <div className={styles.googleIcon}>
              <GoogleLogo />
            </div>
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
