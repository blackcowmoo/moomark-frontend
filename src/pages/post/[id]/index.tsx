import { useRouter } from 'next/router';
import { CommentProps } from 'antd';
import Post, { IPost } from '@components/Post';
import { useState, useEffect } from 'react';
import { mockPost } from '@components/Post/mockdata';

export interface PostProps {
  editorName: string;
  content: string;
  tags?: string[];
  comment?: CommentProps;
}

const PostPage: React.FC<PostProps> = () => {
  const { id } = useRouter().query;
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    // QUERY by post id
    // get response set postState
    if (id === '0') {
      setPost(mockPost);
    }
  }, [id]);

  return <>{post && <Post postProps={post} />}</>;
};

export default PostPage;
