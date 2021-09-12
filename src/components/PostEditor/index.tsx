import { useState, useEffect, useCallback } from 'react';
import TagList from '@components/TagList';
import styles from './editor.module.scss';
import Preview from './Preview';
import MarkDownEditor from './MarkDownEditor';

interface EditorInput {
  title: string;
  text: string;
  tags: string[];
}

interface EditorProps extends EditorInput {
  editorName: string;
  isNewPost: boolean;
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
  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [title],
  );

  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement> | string) => {
      if (typeof e === 'string') {
        setText(e);
      } else setText(e.target.value);
    },
    [text],
  );

  const onChangeTags = useCallback(
    (input: string[]) => {
      setTags(input);
    },
    [tags],
  );
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div className={styles.title}>
          <input
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className={styles.tags}>
          <TagList isEditable={true} tagList={tags} setTagList={onChangeTags} />
        </div>
        <MarkDownEditor changeText={onChangeText} text={text} />
      </div>
      <div className={styles.previewContainer} id='preview'>
        <Preview
          title={title}
          editorName={props.editorName}
          tags={tags}
          text={text}
        />
      </div>
    </div>
  );
};

export default Editor;
