import { atom, selector } from 'recoil';

export const defaultHeaderOption = { 'x-moom-route': '' };

export const customHeaderAtom = atom<Object>({
  key: 'customheader',
  default: defaultHeaderOption,
});

export const customHeaderState = selector({
  key: 'customHeader',
  get: ({ get }) => {
    const customHeader = get(customHeaderAtom);
    return customHeader;
  },
});
