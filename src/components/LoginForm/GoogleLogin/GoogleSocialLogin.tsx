import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import getConfig from 'next/config';
import { useMutation } from '@apollo/client';
import { GoogleLogin } from 'react-google-login';

import { userSessionState } from 'recoil/userSession';
import { customHeaderState } from 'recoil/customHeader';
import { LOGIN } from 'api/queries/user.queries';
import GoogleLogo from '@components/svg/GoogleLogo.svg';

import styles from '../LoginForm.module.scss';

interface props {
  onClose: () => void;
}

const GoogleSocialLogin: React.FC<props> = ({ onClose }) => {
  const {
    publicRuntimeConfig: { GOOGLE_CLIENT_ID },
  } = getConfig();
  const [customHeader] = useRecoilState(customHeaderState);
  const [, setUserSession] = useRecoilState(userSessionState);
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
    onError(error) {
      console.log(error);
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
