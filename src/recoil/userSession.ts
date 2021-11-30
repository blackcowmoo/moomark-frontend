import { atom, selector } from 'recoil';

interface IUserSession {
  id: null | string;
  userName: null | string;
}

export const userSessionAtom = atom<IUserSession>({
  key: 'userSession',
  default: { id: null, userName: null },
});

export const loginUserState = selector({
  key: 'loginUserState',
  get: ({ get }) => {
    const userSession = get(userSessionAtom);
    const { userName } = userSession;

    return { userName };
  },
});
