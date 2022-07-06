import Link from 'next/link';
import { IPostList } from 'types/post';
import { timeForToday } from '@utils/common';

import { EyeOutlined, LikeOutlined } from '@ant-design/icons';

import styles from './PostList.module.scss';

interface props {
  post: IPostList;
}

const PostListItem: React.FC<props> = ({ post }) => {
  const { id, title, user, recommendCount, uploadTime, viewsCount, content } = post;
  const isWithDrawn: string = 'this_user_has_been_withdrawn';
  return (
    <div className={styles.PostListItem}>
      <Link href={`/post/${id}`}>
        <a>
          <div className={styles.content}>
            <h4>{title}</h4>
            <p className={styles.description}>{content}</p>
          </div>
        </a>
      </Link>
      <div className={styles.footer}>
        <div className={styles.author}>
          {user.nickname === isWithDrawn ? (
            '탈퇴한유저'
          ) : (
            <Link href={`/user/${user.nickname}`}>
              <a>{user.nickname}</a>
            </Link>
          )}
        </div>
        <div className={styles.info}>
          <div>
            <LikeOutlined /> {recommendCount}
          </div>
          <div>
            <EyeOutlined /> {viewsCount}
          </div>
          <div className={styles.date}>{timeForToday(uploadTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
