import Link from 'next/link';
import { TilePostProps } from 'types';
import { ViewType } from './TileViewPostList';
import { timeForToday } from 'utils/common';
import styles from './TileViewPostList.module.scss';

interface props {
  viewType: ViewType;
  value: TilePostProps;
}

const TileViewItem: React.FC<props> = ({ value, viewType }) => {
  const { id, title, author, like, date, thumbnail, description } = value;
  return (
    <div className={styles.item}>
      <Link href={`/post/${id}`}>
        <a>
          {
            <div className={styles.thumbnail}>
              <img src={thumbnail || 'https://pbs.twimg.com/media/ESbTA4rUcAArJfB.jpg'} alt={thumbnail} />
            </div>
          }
        </a>
      </Link>
      <div className={styles.info}>
        <h4> {title}</h4>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.subInfo}>
          <span>{timeForToday(date)}</span>
        </div>
      </div>
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
