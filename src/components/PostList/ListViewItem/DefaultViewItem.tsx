import Link from 'next/link';
import { PostListViewProps } from 'types';
import { timeForToday } from 'lib/common';
import styles from './ListViewItem.module.scss';

interface props {
  value: PostListViewProps;
}

const DefaultViewItem: React.FC<props> = ({ value }) => {
  const { id, title, author, like, date } = value;
  return (
    <li className={styles.DefaultViewItem}>
      <h5 className={styles.listItemWrapper}>
        <a className={styles.title}>
          <Link
            // href={{
            //   pathname: '/post/[id]',
            //   query: { id: id }, // array라 문자화
            // }}
            // as={}
            href={`/post/${id}`}
          >
            {title}
          </Link>
        </a>
        <div className={styles.postInfo}>
          <div className={styles.author}>{author}</div>
          <div className={styles.like}>{like}</div>
          <div className={styles.date}>{timeForToday(date)}</div>
        </div>
      </h5>
    </li>
  );
};

export default DefaultViewItem;
