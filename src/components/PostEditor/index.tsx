import Router from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from '@apollo/client';
import { Editor } from '@toast-ui/react-editor';

import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import { themeState } from '@recoil/theme';
import TagList from '@components/common/TagList';
import { WRITE_POST } from 'api/queries/post.queries';
import Button from '@components/common/Button';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import styles from './PostEditor.module.scss';

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
  const [writePost] = useMutation(WRITE_POST, {
    onCompleted: (data) => {
      Router.push(`post/${data.writePost.id}`);
    },
  });
  const [theme] = useRecoilState(themeState);
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const { width } = useWindowDimensions();
  const editorRef = useRef<Editor>(null);
  const maxContentLength = 5000;

  useEffect(() => {
    if (!props.isNewPost) {
      setTitle(props.title);
      setTags(props.tags);
      setContent(props.text);
    }
  }, []);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeEditor = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getMarkdown());
    }
  };

  const onChangeTags = (input: string[]) => {
    setTags(input);
  };

  const onSubmitPost = () => {
    if (title && content && content.length <= maxContentLength) {
      writePost({
        variables: {
          post: {
            title,
            content,
          },
        },
      });
    } else {
      // TODO toast message
      console.log('can not post');
    }
  };

  const onCancelEdit = () => {
    Router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.Posteditor}>
        <div className={styles.title}>
          <input name='title' placeholder='제목을 입력해주세요' value={title} onChange={onChangeTitle} required />
        </div>
        <div className={styles.tags}>
          <TagList isEditable={true} tagList={tags} setTagList={onChangeTags} />
        </div>
        <div className={styles.contentInfo}>
          글자수
          <span>
            {content.length}/ {maxContentLength}
          </span>
        </div>

        <div className={`editor-panel-editor${theme === 'dark' ? ' toastui-editor-dark' : ''}`}>
          <Editor
            ref={editorRef}
            previewStyle={width <= 760 ? 'tab' : 'vertical'}
            onChange={onChangeEditor}
            height='65vh'
            initialEditType='markdown'
            useCommandShortcut={true}
            initialValue={content || ''}
          />
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => onSubmitPost()}>업로드</Button>
          <Button onClick={() => onCancelEdit()}>취소</Button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
