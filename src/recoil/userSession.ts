import { atom, selector } from 'recoil';

interface IUserSession {
  id: null | string;
  userName: null | string;
}

export const userSessionState = atom<IUserSession>({
  key: 'userSession',
  default: { id: null, userName: null },
});

export const loginUserState = selector({
  key: 'loginUserState',
  get: ({ get }) => {
    const userSession = get(userSessionState);
    const { userName } = userSession;

    return { userName };
  },
});
