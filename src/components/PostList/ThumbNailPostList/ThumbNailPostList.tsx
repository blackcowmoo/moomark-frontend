import { TilePostProps } from 'types';
import TileViewItem from './TileViewItem';
import styles from './ThumbNailPostList.module.scss';

export type ViewType = 'small' | 'large';

interface Props {
  listTitle?: string;
  viewType?: ViewType;
  postList: TilePostProps[];
}

const ThumbNailPostList: React.FC<Props> = ({ listTitle, postList, viewType = 'small' }) => {
  return (
    <div className={styles.TilePostList}>
      {listTitle && <h2 className={styles.listTitle}>{listTitle}</h2>}
      <div className={viewType === 'small' ? styles.smallWrapper : styles.largeWrapper}>
        {postList.map((value, index) => {
          return <TileViewItem value={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ThumbNailPostList;
