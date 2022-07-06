import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { customHeaderState } from '@recoil/customHeader';

export default function useCustomHeader() {
  const [customHeader, setCustomHeader] = useRecoilState(customHeaderState);

  const LOCAL_STORAGE_KEY = 'mooMark-dev-customHeader';

  useEffect(() => {
    const savedCustomHeader = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCustomHeader) {
      const parsedHeader = JSON.parse(savedCustomHeader);
      setCustomHeader(parsedHeader);
    }
  }, []);

  return { customHeader, setCustomHeader };
}
