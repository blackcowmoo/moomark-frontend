import { CommentProps } from 'antd';

export interface PostProps{
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

const PostPage: React.FC<PostProps> = ({ comment, tags, content }) => {
  return (
    <>
      <div>{content}</div>
      <div>{tags}</div>
      <div>{comment}</div>
    </>
  );
};

export default PostPage;
