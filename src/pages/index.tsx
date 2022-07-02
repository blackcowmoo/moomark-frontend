import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import client from 'api/apolloClient';

import { GET_POSTLIST_MAIN } from 'api/queries/post.queries';
import PostList from '@components/PostList';
import HomeLayout from 'components/AppLayout/HomeLayout';
import { IPostList } from 'types/post';
import HeadMeta from '@components/common/HeadMeta';

import styles from 'components/AppLayout/HomeLayout/HomeLayout.module.scss';

interface Props {
  postList: IPostList[];
}

const HomePage: NextPage<Props> = ({ postList }) => {
  return (
    <>
      <HeadMeta title='MooMark Home' description='moomark home page' />
      <HomeLayout>
        <div className={styles.homeList}>
          <PostList posts={postList} />
        </div>
      </HomeLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_POSTLIST_MAIN,
    variables: { limit: 10 },
  });

  return {
    props: {
      postList: data.listPosts.posts || [],
    },
  };
};

export default HomePage;
