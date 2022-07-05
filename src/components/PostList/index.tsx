import { IPostList } from 'types/post';
import PostListItem from './PostListItem';

import styles from './PostList.module.scss';

interface Props {
  listTitle?: string;
  posts: IPostList[];
}

const PostList: React.FC<Props> = ({ listTitle, posts }) => {
  return (
    <div className={styles.PostList}>
      {listTitle && <h2>{listTitle}</h2>}
      {posts.map((post) => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
