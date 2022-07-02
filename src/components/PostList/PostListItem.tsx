import Link from 'next/link';
import { IPostList } from 'types/post';
import { timeForToday } from 'utils/common';

import { EyeOutlined, LikeOutlined } from '@ant-design/icons';

import styles from './PostList.module.scss';

interface props {
  post: IPostList;
}

const PostListItem: React.FC<props> = ({ post }) => {
  const { id, title, user, recommendCount, uploadTime, viewsCount } = post;
  const isWithDrawn: string = 'this_user_has_been_withdrawn';
  return (
    <div className={styles.PostListItem}>
      <div className={styles.title}>
        <Link href={`/post/${id}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className={styles.info}>
        <span>
          <LikeOutlined /> {recommendCount}
        </span>
        <span>
          <EyeOutlined /> {viewsCount}
        </span>
        {user.nickname === isWithDrawn ? (
          <span>탈퇴한유저</span>
        ) : (
          <span className={styles.author}>
            <Link href={`/user/${user.nickname}`}>{user.nickname}</Link>
          </span>
        )}
        <span className={styles.date}>{timeForToday(uploadTime)}</span>
      </div>
    </div>
  );
};

export default PostListItem;
