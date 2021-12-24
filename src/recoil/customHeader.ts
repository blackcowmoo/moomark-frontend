import { atom, selector } from 'recoil';

export const customHeaderAtom = atom<Object>({
  key: 'customheader',
  default: { 'x-moom-route': '' },
});

export const customHeaderState = selector({
  key: 'customHeader',
  get: ({ get }) => {
    const customHeader = get(customHeaderAtom);
    return customHeader;
  },
});
