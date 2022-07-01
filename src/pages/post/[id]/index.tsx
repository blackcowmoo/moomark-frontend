import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import client from 'api/apolloClient';
import { GET_POST } from 'api/queries/post.queries';
import Post, { IPost } from '@components/Post';
import HeadMeta from '@components/common/HeadMeta';
import { mockPost } from '@components/Post/mockdata';

type Props = {
  post: IPost;
};

const PostPage: NextPage<Props> = ({ post }) => {
  console.log(post);
  const { title, content } = post;
  return (
    <>
      <HeadMeta title={`${title} | moomark`} description={content} />
      <Post postProps={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const id = Number(context.query.id);
    const { data } = await client.query({
      query: GET_POST,
      variables: { postId: id },
    });

    return {
      props: {
        post: data,
      },
    };
  } catch (err) {
    return {
      props: {
        post: mockPost,
      },
    };
  }
};

export default PostPage;
