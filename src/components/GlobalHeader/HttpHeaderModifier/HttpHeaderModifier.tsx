import { ChangeEvent, useEffect, useState } from 'react';
import useCustomHeader from 'utils/hooks/useCustomHeader';
import { defaultHeaderOption } from 'recoil/customHeader';
import styles from './HttpHeaderModifier.module.scss';

interface ICustomOption {
  customKey: string;
  customValue: string;
}

const HttpHeaderModifier = () => {
  const [optionInput, setOptionInput] = useState<ICustomOption>({ customKey: '', customValue: '' });
  const [inputArray, setInputArray] = useState<ICustomOption[]>([]);
  const { customHeader, setCustomHeader } = useCustomHeader();
  const [textareaCustomHeader, setTextareaCustomHeader] = useState<string>('');

  const LOCAL_STORAGE_KEY = 'mooMark-dev-customHeader';

  const convertObjectToInputArray = (input: object) => {
    const tmp = Object.entries(input).map(([key, value]) => {
      return { customKey: key, customValue: value };
    });
    setInputArray(tmp);
  };

  useEffect(() => {
    const savedCustomHeader = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCustomHeader) {
      const parsedHeader = JSON.parse(savedCustomHeader);
      setCustomHeader(parsedHeader);
      convertObjectToInputArray(parsedHeader);
      setTextareaCustomHeader(savedCustomHeader);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customHeader));
    setTextareaCustomHeader(JSON.stringify(customHeader));
  }, [customHeader]);

  const clone = (obj: any) => ({ ...obj });

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
    setInputArray([
      ...inputArray,
      {
        customKey: key,
        customValue: value,
      },
    ]);
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

  const onApplyInputArray = () => {
    const object = inputArray.reduce((obj, item) => ({ ...obj, [item.customKey]: item.customValue }), {});
    setCustomHeader(object);
  };

  const onSaveTextarea = () => {
    try {
      setCustomHeader(JSON.parse(textareaCustomHeader));
    } catch (e) {
      setTextareaCustomHeader(JSON.stringify(customHeader));
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number, key: string) => {
    const arr = [...inputArray];
    arr[index] = { ...arr[index], [key]: e.target.value };
    setInputArray(arr);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        {inputArray.map(({ customKey, customValue }, index) => {
          return (
            <div className={styles.item} key={index}>
              <input onChange={(e) => handleInput(e, index, 'customKey')} value={customKey} />
              <input onChange={(e) => handleInput(e, index, 'customValue')} value={customValue} />
              <button onClick={() => removeOption(customHeader, customKey)}>remove</button>
            </div>
          );
        })}
        <button onClick={onApplyInputArray}>apply input</button>
        <button onClick={() => convertObjectToInputArray(customHeader)}>reset input</button>
      </div>
      <div className={styles.inputContainer}>
        <div>input new option</div>
        <input value={optionInput.customKey} onChange={(e) => handleCustomKey(e)} />
        <input value={optionInput.customValue} onChange={(e) => handleCustomValue(e)} />
        <button onClick={() => addCustomOption(optionInput.customKey, optionInput.customValue)}>add</button>
      </div>
      <div className={styles.textareaWrapper}>
        <div>Result</div>
        <textarea className={styles.result} value={textareaCustomHeader} onChange={onChangeTextarea} />
        <button onClick={onSaveTextarea}>textarea save</button>
        <button className={styles.resetButton} onClick={resetHeaderOption}>
          reset header
        </button>
      </div>
    </div>
  );
};

export default HttpHeaderModifier;
