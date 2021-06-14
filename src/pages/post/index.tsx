import { CommentProps } from 'antd';
import Post, { mockProps } from '@components/Post';

export interface PostProps{
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

const PostPage: React.FC<PostProps> = () => {
  return (
    <>
      <Post postProp={mockProps} />
    </>
  );
};

export default PostPage;
