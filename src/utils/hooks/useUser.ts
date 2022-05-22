import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { userRecoilState, IUser, initialUserState } from '@recoil/user';
import { useRecoilState } from 'recoil';

import { LOGIN } from 'api/queries/user.queries';
import { customHeaderState } from '@recoil/customHeader';

const useUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userRecoilState);
  // remove on service
  const [customHeader] = useRecoilState(customHeaderState);

  const [requestLogin, res] = useMutation(LOGIN, {
    context: {
      headers: {
        ...customHeader,
      },
    },
    onCompleted: ({ data }) => {
      const { user } = data;
      const responsedUser: IUser = {
        token: data.token,
        name: user.name,
        email: user.email,
        nickname: user.nickname,
        picture: user.picture,
        role: user.role,
      };
      setCurrentUser(responsedUser);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    console.log(res);
  }, [res]);

  const loginUser = (socialType: string, authCode: string) => {
    if (socialType === 'gitHub') {
      setCurrentUser({ name: 'githublogin', nickname: 'git', token: null, email: '', picture: null, role: 'USER' });
    } else {
      requestLogin({ variables: { type: socialType, code: authCode } });
    }
  };

  const logoutUser = () => {
    setCurrentUser(initialUserState);
  };

  return { currentUser, loginUser, logoutUser };
};

export default useUser;
