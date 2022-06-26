import { IPostList } from 'types/post';
import PostListItem from './PostListItem';

import styles from './PostList.module.scss';

interface Props {
  listTitle: string;
  postList: IPostList[];
}

const PostList: React.FC<Props> = ({ listTitle, postList }) => {
  return (
    <div className={styles.PostList}>
      <h2>{listTitle}</h2>
      {postList.map((post) => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
