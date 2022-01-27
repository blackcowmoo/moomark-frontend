import { PostListViewProps } from 'types';
import DefaultViewItem from './DefaultViewItem';
import styles from './DefaultPostList.module.scss';

export interface IDefaultPostList{
  listTitle: string;
  postList: PostListViewProps[];
}

const DefaultPostList: React.FC<IDefaultPostList> = ({ listTitle, postList }) => {
  return (
    <div className={styles.container}>
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
