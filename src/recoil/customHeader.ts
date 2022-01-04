import { atom } from 'recoil';

export const defaultHeaderOption = { 'x-moom-route': '' };

export const customHeaderState= atom<Object>({
  key: 'customheaderState',
  default: defaultHeaderOption,
});
