import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { customHeaderAtom, defaultHeaderOption } from 'recoil/customHeader';
import styles from './HttpHeaderModifier.module.scss';

interface ICustomOption {
  customKey: string;
  customValue: string;
}

const HttpHeaderModifier = () => {
  const [customOption, setCustomOption] = useState<ICustomOption>({ customKey: '', customValue: '' });
  const { customKey, customValue } = customOption;
  const [customHeader, setCustomHeader] = useRecoilState(customHeaderAtom);
  const localStorageKey = 'mooMark-dev-customHeader';

  useEffect(() => {
    const savedCustomHeader = localStorage.getItem(localStorageKey);
    if (savedCustomHeader) {
      setCustomHeader(JSON.parse(savedCustomHeader));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(customHeader));
  }, [customHeader]);

  const clone = (obj: any) => ({ ...obj });

  const changeHeaderValue = (key: string, value: string) => {
    return { ...customHeader, [key]: value };
  };

  const onChangeHeaderValue = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHeader(changeHeaderValue(key, e.target.value));
  };

  const removeOption = (object: Object, key: string) => {
    const clonedObj = clone(object);
    delete clonedObj[key];

    setCustomHeader(clonedObj);
  };

  const clearCustomOption = () => {
    setCustomOption({ customKey: '', customValue: '' });
  };

  const resetHeaderOption = () => {
    setCustomHeader(defaultHeaderOption);
    clearCustomOption();
  };

  const addCustomOption = (key: string, value: string) => {
    setCustomHeader((prev) => {
      return { ...prev, [key]: value };
    });
    clearCustomOption();
  };

  const handleCustomKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption((prev) => {
      return { ...prev, customKey: e.target.value };
    });
  };

  const handleCustomValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption((prev) => {
      return { ...prev, customValue: e.target.value };
    });
  };

  return (
    <div className={styles.contents}>
      {Object.entries(customHeader).map(([key, value]) => (
        <div className={styles.item} key={key}>
          <input value={key} />
          <input onChange={(e) => onChangeHeaderValue(key, e)} value={value} />
          <button onClick={() => removeOption(customHeader, key)}>remove</button>
        </div>
      ))}
      <div className={styles.inputContainer}>
        <input value={customKey} onChange={(e) => handleCustomKey(e)} />
        <input value={customValue} onChange={(e) => handleCustomValue(e)} />
        <button onClick={() => addCustomOption(customKey, customValue)}>add</button>
      </div>
      <button className={styles.resetButton} onClick={() => resetHeaderOption()}>
        Reset Option
      </button>
      <p>check value in localStorage Key: {localStorageKey}</p>
      <div className={styles.result}>{JSON.stringify(customHeader)}</div>
    </div>
  );
};

export default HttpHeaderModifier;
