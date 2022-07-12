import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import client from 'api/apolloClient';

import { GET_POSTLIST_MAIN } from 'api/queries/post.queries';
import ScrollablePostList from '@components/PostList/ScrollablePostList';
import HomeLayout from 'components/AppLayout/HomeLayout';
import { IPostList } from 'types/post';
import HeadMeta from '@components/common/HeadMeta';

interface Props {
  postList: IPostList[];
}

const HomePage: NextPage<Props> = ({ postList }) => {
  return (
    <>
      <HeadMeta title='MooMark Home' description='moomark home page' />
      <HomeLayout>
        <ScrollablePostList preRenderPosts={postList} />
      </HomeLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await client.query({
      query: GET_POSTLIST_MAIN,
      variables: { limit: 10 },
    });

    return {
      props: {
        postList: data.listPosts.posts || [],
      },
    };
  } catch (err) {
    Sentry.captureException(err);
    return {
      props: {
        postList: [],
      },
    };
  }
};

export default HomePage;
