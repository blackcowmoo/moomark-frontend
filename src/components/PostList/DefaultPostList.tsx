import  DefaultViewItem from './ListViewItem/DefaultViewItem';
import { PostListViewProps } from 'types';
import styles from './PostList.module.scss';

interface props {
  listTitle: string;
  postList: PostListViewProps[];
}

const DefaultPostList: React.FC<props> = ({ listTitle,postList }) => {
  return (
    <div className={styles.defaultPostList}>
      <div className={styles.listTitle}>{listTitle}</div>
      <ul>
        {postList.map((value) => {
          return <DefaultViewItem  value={value} />;
        })}
      </ul>
    </div>
  );
};

export default DefaultPostList;
