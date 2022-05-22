import { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { userRecoilState, IUser, initialUserState } from '@recoil/user';
import { useRecoilState } from 'recoil';

import { LOGIN, ME } from 'api/queries/user.queries';
import { customHeaderState } from '@recoil/customHeader';
import { setCookie, removeCookie } from 'utils/cookie';

type UseUserProps = [IUser, (socialType: string, authCode: string) => void, () => void, () => void];

const useUser = (): UseUserProps => {
  const [currentUser, setCurrentUser] = useRecoilState(userRecoilState);
  // remove on service
  const [customHeader] = useRecoilState(customHeaderState);

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
      setCurrentUser(responsedUser);
    }
  }, [data, loading]);

  const [requestLogin] = useMutation(LOGIN, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted: ({ login }) => {
      const { user } = login;
      console.log(login);
      setCookie('access-token', login.token);
      setCookie('refresh-token', login.refreshToken);
      const responsedUser: IUser = {
        name: user.name,
        email: user.email,
        nickname: user.nickname,
        picture: user.picture,
        role: user.role,
      };
      setCurrentUser(responsedUser);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const loginUser = (socialType: string, authCode: string) => {
    if (socialType === 'gitHub') {
      setCurrentUser({ name: 'githublogin', nickname: 'git', email: '', picture: null, role: 'USER' });
    } else {
      requestLogin({ variables: { type: socialType, code: authCode } });
    }
  };

  const logoutUser = () => {
    setCurrentUser(initialUserState);
    removeCookie('access-token');
    removeCookie('refresh-token');
  };

  return [currentUser, loginUser, logoutUser, getMe];
};

export default useUser;
