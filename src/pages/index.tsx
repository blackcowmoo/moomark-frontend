import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import client from 'api/apolloClient';

import { HomePageTileMock } from 'utils/mock';
import GridPostList from '@components/PostList/GridPostList';
import DefaultPostList from '@components/PostList/DefaultPostList';
import HomeLayout from '@components/AppLayout/HomeLayout';
import { IPostList } from 'types/post';
import { GET_POSTLIST } from 'api/queries/post.queries';

import styles from 'components/AppLayout/HomeLayout/HomeLayout.module.scss';
import { useEffect } from 'react';

interface Props {
  postList: IPostList[];
}

const HomePage: NextPage<Props> = ({ postList }) => {
  useEffect(() => {
    console.log(postList);
  }, []);
  return (
    <HomeLayout>
      <div className={styles.tile}>
        <GridPostList listTitle={'인기'} postList={HomePageTileMock} />
      </div>
      <div className={styles.default}>
        <DefaultPostList listTitle={'해외 주식'} postList={postList} />
        <DefaultPostList listTitle={'국내 주식'} postList={postList} />
        <DefaultPostList listTitle={'암호 화폐'} postList={postList} />
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_POSTLIST,
    variables: { limit: 10 },
  });

  return {
    props: {
      postList: data.posts
        ? data.posts.map((post: any) => ({
          id: post.id,
          title: post.title,
          author: post.user.nickname,
          like: post.recommendCount,
          uploadTime: post.uploadTime,
        }))
        : [],
    },
  };
};

export default HomePage;
