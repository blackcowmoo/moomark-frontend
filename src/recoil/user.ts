import { atom } from 'recoil';

export interface IUser {
  token: null | string;
  name: null | string;
  nickname: string;
  email: string;
  picture: null | string;
  role: string;
}

export const initialUserState: IUser = { name: null, nickname: '', token: null, email: '', picture: null, role: '' };
export const userRecoilState = atom<IUser>({
  key: 'currentUser',
  default: initialUserState,
});
