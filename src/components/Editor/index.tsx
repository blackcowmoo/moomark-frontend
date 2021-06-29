import { useState, useEffect } from 'react';
import TagList from '@components/TagList';
import styles from './editor.module.scss';
import Preview from './Preview';

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
  };
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(text);
  };
  const changeTags = (input: string[]) => {
    setTags(input);
  };
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div className={styles.title}>
          <input placeholder='Title' value={title} onChange={changeTitle}/>
        </div>
        <div className={styles.tags}>
          <TagList isEditable={true} tagList={tags} setTagList={changeTags}/>
        </div>
        <textarea className={styles.textarea} value={text} onChange={changeText} />
      </div>
      <div className={styles.previewContainer} id='preview'>
      <Preview title={title} editorName={props.editorName} tags={tags} text={text} />
      </div>
    </div>
  );
};

export default Editor;
