import Link from 'next/link';
import { IPostList } from 'types';
import { timeForToday } from 'utils/common';
import styles from './DefaultPostList.module.scss';

interface props {
  value: IPostList;
}

const DefaultViewItem: React.FC<props> = ({ value }) => {
  const { id, title, author, like, date } = value;
  return (
    <li className={styles.DefaultViewItem}>
      <h5 className={styles.listItemWrapper}>
        <div className={styles.title}>
          <Link href={`/post/${id}`}>{title}</Link>
        </div>
        <div className={styles.postInfo}>
          <div className={styles.like}>{like}</div>
          <div className={styles.author}>
            <Link href={`/user/${author}`}>{author}</Link>
          </div>
          <div className={styles.date}>{timeForToday(date)}</div>
        </div>
      </h5>
    </li>
  );
};

export default DefaultViewItem;
