import Link from 'next/link';
import { TilePostProps } from 'types';
import { timeForToday } from 'utils/common';
import styles from './TileViewPostList.module.scss';

interface props {
  value: TilePostProps;
}

const TileViewItem: React.FC<props> = ({ value }) => {
  const { id, title, author, like, date, thumbnail, description } = value;
  return (
    <div className={styles.TileViewItem}>
      <Link href={`/post/${id}`}>
        <a>
          {
            <div className={styles.thumbnail}>
              <img src={thumbnail || 'https://pbs.twimg.com/media/ESbTA4rUcAArJfB.jpg'} alt={thumbnail} />
            </div>
          }
          <div className={styles.info}>
            <h4> {title}</h4>
            <div className={description}>
              <p>{description}</p>
            </div>
            <div className={styles.subInfo}>
              <span>{timeForToday(date)}</span>
            </div>
          </div>
        </a>
      </Link>

      <div className={styles.footer}>
        <Link href={`/user/${author}`}>
          <a className={styles.author}>
            by <b>{author}</b>
          </a>
        </Link>
        <div className={styles.like}> 🍕 {like}</div>
      </div>
    </div>
  );
};

export default TileViewItem;
