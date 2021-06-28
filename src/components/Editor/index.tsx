import React, { useState, useEffect } from 'react';
import styles from './editor.module.scss';
import Preview from './Preview';
import TagList from '@components/TagList';

interface EditorProps {
  editorName: string;
  isNewPost: boolean;
  title: string;
  text: string;
  tags: string[];
}

const Editor: React.FC<EditorProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (!props.isNewPost) {
      setTitle(props.title);
      setTags(props.tags);
      setText(props.text);
    }
  }, []);
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  }
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(text);
  };
  const changeTags = (input: string[]) => {
    setTags(input);
  }
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div className={styles.title}>
          <input placeholder='Title' value={title} onChange={changeTitle}/>
        </div>
        <div className={styles.tags}>
          <TagList isEditable={true} tagList={tags}/>
        </div>
        <textarea className={styles.textarea} value={text} onChange={changeText} />
      </div>
      <Preview title={title} editorName={'tmp'} tags={tags} text={text} />
    </div>
  );
};

export default Editor;
