import { atom } from 'recoil';

export type Theme = 'light' | 'dark' | null;

export const globalThemeState = atom<Theme>({
  key: 'globalThemeState',
  default: null,
});
