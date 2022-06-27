import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import client from 'api/apolloClient';

import { GET_POSTLIST_MAIN } from 'api/queries/post.queries';
import PostList from '@components/PostList';
import HomeLayout from 'components/AppLayout/HomeLayout';
import { IPostList } from 'types/post';

import { useEffect } from 'react';

import styles from 'components/AppLayout/HomeLayout/HomeLayout.module.scss';

interface Props {
  postList: IPostList[];
}

const HomePage: NextPage<Props> = ({ postList }) => {
  useEffect(() => {
    console.log(postList);
  }, []);
  return (
    <HomeLayout>
      <div className={styles.homeList}>
        <PostList listTitle='해외주식' posts={postList} />
        <PostList listTitle='취미' posts={postList} />
        <PostList listTitle='잡담' posts={postList} />
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_POSTLIST_MAIN,
    variables: { limit: 10 },
  });

  return {
    props: {
      postList: data.listPosts.posts
        ? data.listPosts.posts.map((post: any) => ({
          id: post.id,
          title: post.title,
          author: post.user.nickname,
          recommendCount: post.recommendCount,
          viewsCount: post.viewsCount,
          uploadTime: post.uploadTime,
        }))
        : [],
    },
  };
};

export default HomePage;
