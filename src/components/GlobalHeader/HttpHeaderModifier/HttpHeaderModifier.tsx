import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { customHeaderState, defaultHeaderOption } from 'recoil/customHeader';
import styles from './HttpHeaderModifier.module.scss';

interface ICustomOption {
  customKey: string;
  customValue: string;
}

const HttpHeaderModifier = () => {
  const [optionInput, setOptionInput] = useState<ICustomOption>({ customKey: '', customValue: '' });
  const { customKey, customValue } = optionInput;
  const [customHeader, setCustomHeader] = useRecoilState(customHeaderState);
  const [textareaCustomHeader, setTextareaCustomHeader] = useState<string>('');

  const LOCAL_STORAGE_KEY = 'mooMark-dev-customHeader';

  useEffect(() => {
    const savedCustomHeader = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCustomHeader) {
      setCustomHeader(JSON.parse(savedCustomHeader));
      setTextareaCustomHeader(savedCustomHeader);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customHeader));
    setTextareaCustomHeader(JSON.stringify(customHeader));
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
    setOptionInput({ customKey: '', customValue: '' });
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

  const handleCustomKey = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionInput((prev) => {
      return { ...prev, customKey: e.target.value };
    });
  };

  const handleCustomValue = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionInput((prev) => {
      return { ...prev, customValue: e.target.value };
    });
  };

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaCustomHeader(e.target.value);
  };

  const onSaveTextarea = () => {
    try {
      setCustomHeader(JSON.parse(textareaCustomHeader));
    } catch (e) {
      console.log('textarea value is not JSON');
      setTextareaCustomHeader(JSON.stringify(customHeader));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        {Object.entries(customHeader).map(([key, value]) => (
          <div className={styles.item} key={key}>
            <input value={key} />
            <input onChange={(e) => onChangeHeaderValue(key, e)} value={value} />
            <button onClick={() => removeOption(customHeader, key)}>remove</button>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <div>custom input</div>
        <input value={customKey} onChange={(e) => handleCustomKey(e)} />
        <input value={customValue} onChange={(e) => handleCustomValue(e)} />
        <button onClick={() => addCustomOption(customKey, customValue)}>add</button>
      </div>
      <div className={styles.textareaWrapper}>
        <textarea className={styles.result} value={textareaCustomHeader} onChange={onChangeTextarea} />
        <button onClick={onSaveTextarea}>Save Option TextArea</button>
        <button className={styles.resetButton} onClick={resetHeaderOption}>
          Reset Option
        </button>
      </div>
    </div>
  );
};

export default HttpHeaderModifier;
