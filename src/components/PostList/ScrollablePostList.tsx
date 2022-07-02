import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import { GET_POSTLIST_WITH_OFFSET } from 'api/queries/post.queries';
import { IPostList } from 'types/post';
import PostListItem from './PostListItem';

import styles from './PostList.module.scss';

export interface Props {
  listTitle?: string;
  preRenderPosts?: IPostList[];
}

const ScrollablePostList: React.FC<Props> = ({ listTitle, preRenderPosts }) => {
  const [postList, setPostList] = useState<IPostList[]>(preRenderPosts || []);
  const [offset, setOffset] = useState(0);
  const [lastPost, setLastPost] = useState<HTMLDivElement | null>(null);
  const [getPostListWithOffset, { data, loading }] = useLazyQuery(GET_POSTLIST_WITH_OFFSET);

  const loadMorePost = () => {
    getPostListWithOffset({
      variables: { offset },
    });
  };

  useEffect(() => {
    if (data?.listPosts?.posts) {
      setPostList([...postList, ...data?.listPosts?.posts]);
    }
  }, [data]);

  useEffect(() => {
    setOffset(postList[postList.length - 1].id);
  }, [postList]);

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMorePost();
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastPost) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastPost);
    }
    return () => observer && observer.disconnect();
  }, [lastPost]);

  return (
    <div className={styles.PostList}>
      {listTitle && <h2>{listTitle}</h2>}
      {postList.map((post, index) => {
        return index === postList.length - 1 ? (
          <div ref={setLastPost} key={post.id}>
            <PostListItem post={post} />
          </div>
        ) : (
          <PostListItem post={post} key={post.id} />
        );
      })}
      {loading && <div>loading...</div>}
    </div>
  );
};

export default ScrollablePostList;
