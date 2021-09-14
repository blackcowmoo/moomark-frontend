import { CommentProps } from 'antd';
import PostViewer, { mockProps } from '@components/PostViewer';

export interface PostProps{
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

const PostPage: React.FC<PostProps> = () => {
  return (
    <>
      <PostViewer postProp={mockProps} />
    </>
  );
};

export default PostPage;
