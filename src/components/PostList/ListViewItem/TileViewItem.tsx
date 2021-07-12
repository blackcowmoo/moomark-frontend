import Link from 'next/link';
import { TilePostProps } from 'types';
import { timeForToday } from 'lib/common';
import styles from './ListViewItem.module.scss';

interface props {
  value: TilePostProps;
}

const TileViewItem: React.FC<props> = ({ value }) => {
  const { id, title, author, like, date, thumbnail, description } = value;
  return (
    <div className={styles.DefaultViewItem}>
      <h5 className={styles.listItemWrapper}>
        <Link href={`/post/${id}`}>
          <a className={styles.tileMain}>
            <h5> {title}</h5>
            {thumbnail ? <img src={thumbnail} alt={thumbnail} /> : <img src={'/mockprofile.PNG'} alt={thumbnail} />}
            <p>{description}</p>
          </a>
        </Link>
        <div className={styles.postInfo}>
          <Link href={`/user/${author}`}>
            <a className={styles.author}>{author}</a>
          </Link>
          <div className={styles.like}> 😘 {like}</div>
          <div className={styles.date}>{timeForToday(date)}</div>
        </div>
      </h5>
    </div>
  );
};

export default TileViewItem;
