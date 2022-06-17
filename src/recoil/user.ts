import { atom } from 'recoil';

export interface IUser {
  nickname: string;
  email: string;
  picture: null | string;
  role: string | null;
}

export const initialUserState: IUser = { nickname: '', email: '', picture: null, role: null };

export const userRecoilState = atom<IUser>({
  key: 'currentUser',
  default: initialUserState,
});
