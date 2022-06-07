import { useLazyQuery, useMutation } from '@apollo/client';
import { userRecoilState, IUser, initialUserState } from '@recoil/user';
import { useRecoilState } from 'recoil';

import { LOGIN, ME, REFRESH_TOKEN } from 'api/queries/user.queries';
import { customHeaderState } from '@recoil/customHeader';
import { setCookie, removeCookie, getCookie } from 'utils/cookie';
import { CookieSetOptions } from 'universal-cookie';

type SocialType = 'Google' | 'Github';

type UseUserProps = [
  IUser,
  (socialType: SocialType, authCode: string) => void,
  () => void,
  { getMe: () => void; loading: boolean },
  (refreshToken: string) => void,
];

const cookiePathOption: CookieSetOptions = {
  path: '/',
};

const useUser = (): UseUserProps => {
  const [user, setUser] = useRecoilState(userRecoilState);
  const [customHeader] = useRecoilState(customHeaderState);

  const updateUserWithTokens = (responsedUser: IUser, accessToken: string, refreshToken: string) => {
    const accessTokenMaxAge = 3600; // 1hour
    const refreshTokenMaxAge = 7890000; // 3month
    setCookie('access-token', accessToken, {
      ...cookiePathOption,
      maxAge: accessTokenMaxAge,
    });
    setCookie('refresh-token', refreshToken, {
      ...cookiePathOption,
      maxAge: refreshTokenMaxAge,
    });
    setUser(responsedUser);
  };

  const [requestLogin] = useMutation(LOGIN, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted: ({ login }) => {
      if (login) {
        const responsedUser: IUser = {
          name: login.user.name,
          email: login.user.email,
          nickname: login.user.nickname,
          picture: login.user.picture,
          role: login.user.role,
        };
        updateUserWithTokens(responsedUser, login.token, login.refreshToken);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const [requestRefreshToken] = useMutation(REFRESH_TOKEN, {
    onCompleted: ({ refreshToken }) => {
      updateUserWithTokens(refreshToken.user as IUser, refreshToken.token, refreshToken.refreshToken);
    },
  });

  const refreshUser = (refreshToken: string) => {
    requestRefreshToken({ variables: { refreshToken } });
  };

  // get user data when access token is on cookie
  const [getMe, { loading }] = useLazyQuery(ME, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted: ({ me }) => {
      if (me) {
        const responsedUser: IUser = {
          name: me.name,
          email: me.email,
          nickname: me.nickname,
          picture: me.picture,
          role: me.role,
        };
        setUser(responsedUser);
      }
    },
    onError: ({ networkError }) => {
      if (networkError && 'statusCode' in networkError && networkError?.statusCode === 401) {
        // REQUEST REFRESH TOKEN
        refreshUser(getCookie('refresh-token'));
      }
    },
  });

  const loginUser = (socialType: SocialType, authCode: string) => {
    if (socialType === 'Github') {
      setUser({ name: 'githublogin', nickname: 'git', email: '', picture: null, role: 'USER' });
    } else {
      requestLogin({ variables: { type: socialType, code: authCode } });
    }
  };

  const logoutUser = () => {
    setUser(initialUserState);
    removeCookie('access-token', cookiePathOption);
    removeCookie('refresh-token', cookiePathOption);
  };

  return [user, loginUser, logoutUser, { getMe, loading }, refreshUser];
};

export default useUser;
