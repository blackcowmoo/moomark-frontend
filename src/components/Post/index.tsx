import PostContents from '@components/Post/PostContents';
import Comment, { ICommentContent } from '@components/Comment';
import PostHeader from '@components/Post/PostHeader';
import styles from './PostViewer.module.scss';
import mockData from './mockdata';

export interface PostProps {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags: string[];
  comment?: ICommentContent[];
}

export const mockProps = mockData;

interface postViewerProps{
  postProp?: PostProps;
}

const Post: React.FC<postViewerProps> = ({ postProp = mockData }) => {
  return (
    <div className={styles.post}>
      <PostHeader title={postProp.title} editorName={postProp.editorName} tags={postProp.tags} postDate={postProp.postDate} />
      <PostContents contents={postProp.content} />
      <Comment comments={postProp.comment} />
    </div>
  );
};

export default Post;
