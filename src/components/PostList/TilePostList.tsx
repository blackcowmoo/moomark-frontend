import { TilePostProps } from 'types';
import TileViewItem from './ListViewItem/TileViewItem';
import styles from './PostList.module.scss';

interface Props {
  listTitle: string;
  postList: TilePostProps[];
}

const TilePostList: React.FC<Props> = ({ listTitle, postList }) => {
  return (
    <div className={styles.tilePostList}>
      <h2 className={styles.listTitle}>{listTitle}</h2>
      <div className={styles.listWrapper}>
        {postList.map((value, index) => {
          return <TileViewItem value={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TilePostList;
