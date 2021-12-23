import PostContents from '@components/PostContents';
import CommentBox, { CommentProps } from '@components/CommentBox';
import PostHeader from '@components/PostHeader';
import styles from './PostViewer.module.scss';
import mockData from './mockdata';

export interface PostProps {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags: string[];
  comments?: CommentProps[];
}

export const mockProps = mockData;

interface postViewerProps{
  postProp?: PostProps;
}

const PostViewer: React.FC<postViewerProps> = ({ postProp = mockData }) => {
  return (
    <div className={styles.post}>
      <PostHeader title={postProp.title} editorName={postProp.editorName} tags={postProp.tags} postDate={postProp.postDate} />
      <PostContents contents={postProp.content} />
      <CommentBox comments={postProp.comments} />
    </div>
  );
};

export default PostViewer;
