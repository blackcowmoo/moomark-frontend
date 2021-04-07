// import { CommentProps } from 'antd';
import Comment, { CommentProps } from '@components/Comment';
import PostHeader from '@components/PostHeader';
import styles from './post.module.scss';

const mockDate = new Date(2020, 3, 1);

export interface PostProps {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags?: string[];
  comments?: CommentProps[];
}

export const mockProps: PostProps = {
  title: 'mockTitle 입니다',
  postDate: mockDate,
  editorName: 'writerMock',
  content: 'contents contents\n aknasfasdfkkkkk',
  tags: ['test', '태그', '안녕하세요', '소통해요'],
  comments: [
    {
      info: {
        userName: 'test',
        commentDate: mockDate,
      },
      text: 'comment mocking',
    },
  ],
};

interface props {
  postProp: PostProps;
}

const Post = ({ postProp }: props) => {
  return (
    <>
      <PostHeader title={postProp.title} editorName={postProp.editorName} tags={postProp.tags} postDate={postProp.postDate} />
      <div>{postProp.title}</div>
      <div>{postProp.editorName}</div>
      <div>{postProp.tags}</div>
      <div>{postProp.content}</div>
      <div className={styles.comments}>
        {postProp.comments?.map((v) => (
          <Comment key ={v.text} comments={v} />
        ))}
      </div>
    </>
  );
};

export default Post;
