import { useRouter } from 'next/router';
import Post, { IPost } from '@components/Post';
import { useState, useEffect } from 'react';
import { mockPost } from '@components/Post/mockdata';

const PostPage = () => {
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
