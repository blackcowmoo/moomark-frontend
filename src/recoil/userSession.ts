import { atom, selector } from 'recoil';

export const userSessionAtom = atom({
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
