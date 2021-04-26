import { CommentProps } from 'antd';

export interface PostProps{
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

export const mockProps: PostProps = {
  editorName: 'writerMock',
  content: 'contents contents\n aknasfasdfkkkkk',
  tags: ['test', '태그', '안녕하세요', '소통해요'],
};

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
