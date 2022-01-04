import { useState, useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import TagList from '@components/common/TagList';
import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import styles from './editor.module.scss';

interface EditorInput {
  title: string;
  text: string;
  tags: string[];
}

interface EditorProps extends EditorInput {
  editorName: string;
  isNewPost: boolean;
}

const PostEditor: React.FC<EditorProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const { width } = useWindowDimensions();
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (!props.isNewPost) {
      setTitle(props.title);
      setTags(props.tags);
      setText(props.text);
    }
  }, []);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeEditor = () => {
    if (editorRef.current) {
      setText(editorRef.current.getInstance().getMarkdown());
    }
    console.log(text);
  };

  const onChangeTags = (input: string[]) => {
    setTags(input);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Posteditor}>
        <div className={styles.title}>
          <input name='title' placeholder='제목' value={title} onChange={onChangeTitle} />
        </div>
        <div className={styles.tags}>
          <TagList isEditable={true} tagList={tags} setTagList={onChangeTags} />
        </div>
        <div className={styles.editor}>
          <Editor
            ref={editorRef}
            previewStyle={width <= 760 ? 'tab' : 'vertical'}
            onChange={onChangeEditor}
            height='75vh'
            initialEditType='markdown'
            useCommandShortcut={true}
            initialValue={text || ''}
            theme={'dark'}
          />
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
