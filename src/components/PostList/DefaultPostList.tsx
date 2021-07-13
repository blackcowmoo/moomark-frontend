import { PostListViewProps } from 'types';
import DefaultViewItem from './ListViewItem/DefaultViewItem';
import styles from './PostList.module.scss';

interface props {
  listTitle: string;
  postList: PostListViewProps[];
}

const DefaultPostList: React.FC<props> = ({ listTitle, postList }) => {
  return (
    <div className={styles.defaultPostList}>
      <h2 className={styles.listTitle}>{listTitle}</h2>
      <ul>
        {postList.map((value, index) => {
          return <DefaultViewItem value={value} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default DefaultPostList;
