import { IPostList } from 'types';
import DefaultViewItem from './DefaultPostItem';
import styles from './DefaultPostList.module.scss';

interface Props{
  listTitle: string;
  postList: IPostList[];
}

const GridPostList: React.FC<Props> = ({ listTitle, postList }) => {
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

export default GridPostList;
