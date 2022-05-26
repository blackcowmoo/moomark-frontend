import { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { userRecoilState, IUser, initialUserState } from '@recoil/user';
import { useRecoilState } from 'recoil';

import { LOGIN, ME } from 'api/queries/user.queries';
import { customHeaderState } from '@recoil/customHeader';
import { setCookie, removeCookie } from 'utils/cookie';
import { CookieSetOptions } from 'universal-cookie';

type SocialType = 'Google' | 'Github';

type UseUserProps = [IUser, (socialType: SocialType, authCode: string) => void, () => void, { getMe: () => void; loading: boolean }];

const cookiePathOption: CookieSetOptions = {
  path: '/',
};

const useUser = (): UseUserProps => {
  const [user, setUser] = useRecoilState(userRecoilState);
  // remove on service
  const [customHeader] = useRecoilState(customHeaderState);
  const oneDay = 24 * 3600;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;

  // get user data when access token is on cookie
  const [getMe, { loading, data }] = useLazyQuery(ME, {
    context: {
      headers: {
        ...customHeader,
      },
    },
  });

  useEffect(() => {
    if (data && data.me) {
      const { me } = data;
      const responsedUser: IUser = {
        name: me.name,
        email: me.email,
        nickname: me.nickname,
        picture: me.picture,
        role: me.role,
      };
      setUser(responsedUser);
    }
  }, [data, loading]);

  const [requestLogin] = useMutation(LOGIN, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted: ({ login }) => {
      setCookie('access-token', login.token, {
        ...cookiePathOption,
        maxAge: oneWeek,
      });
      setCookie('refresh-token', login.refreshToken, {
        ...cookiePathOption,
        maxAge: 3 * oneMonth,
      });
      const responsedUser: IUser = {
        name: login.user.name,
        email: login.user.email,
        nickname: login.user.nickname,
        picture: login.user.picture,
        role: login.user.role,
      };
      setUser(responsedUser);
    },
    onError: (err) => {
      console.log(err);
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

  return [user, loginUser, logoutUser, { getMe, loading }];
};

export default useUser;
