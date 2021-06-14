import PostContents from '@components/PostContents';
import CommentBox, { CommentProps } from '@components/CommentBox';
import PostHeader from '@components/PostHeader';
import styles from './post.module.scss';
import mockData from './mockdata';

export interface PostProps {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags?: string[];
  comments?: CommentProps[];
}

export const mockProps = mockData;

interface props {
  postProp: PostProps;
}

const Post:React.FC<props> = ({ postProp }) => {
  return (
    <div className = {styles.post}>
      <PostHeader title={postProp.title} editorName={postProp.editorName} tags={postProp.tags} postDate={postProp.postDate} />
      <PostContents contents ={postProp.content}/>
      <CommentBox comments={postProp.comments} />
    </div>
  );
};

export default Post;
