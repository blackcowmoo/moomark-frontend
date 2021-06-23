import React, { useState, useEffect } from 'react';
import styles from './editor.module.scss';
import Preview from './Preview';
interface EditorProps {
  isNewPost: boolean;
  text?: string;
}

const Editor: React.FC<EditorProps> = (props) => {
  const [text, setText] = useState<string>('');
  useEffect(() => {
    if (props.text) {
      setText(props.text);
    }
    console.log(text);
  }, []);
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div className={styles.title}>
          <textarea placeholder='Title' />
        </div>
        <div className={styles.tags}>
          <input placeholder='Input Tag' />
        </div>
        <textarea className={styles.textarea} value={text} onChange={changeText} />
      </div>
      <Preview text={text} />
    </div>
  );
};

export default Editor;
