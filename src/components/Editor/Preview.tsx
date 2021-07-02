import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import PostHeader from '@components/PostHeader';
import styles from './editor.module.scss';

interface previewPostProps {
  title: string;
  editorName: string;
  tags: string[];
  text: string;
}
const Preview:React.FC<previewPostProps> = (props) => {
  return (
    <div className={styles.preview}>
      <PostHeader title={props.title} />
      <ReactMarkdown source={props.text} plugins={[gfm]}/>
    </div>
  );
};

export default Preview;
