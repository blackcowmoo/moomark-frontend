import { RefObject, useEffect } from 'react';

export default function useDetectClickOutside(ref: RefObject<HTMLDivElement>, onClickOutside: any) {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);
}
