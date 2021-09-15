import { CommentProps } from 'antd';
import PostViewer from '@components/PostViewer';

export interface PostProps{
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

const PostPage: React.FC<PostProps> = () => {
  return (
    <>
      <PostViewer />
    </>
  );
};

export default PostPage;
