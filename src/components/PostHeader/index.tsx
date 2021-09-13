import TagList from '@components/common/TagList';
import { timeForToday } from 'lib/common';
import styles from './postHeader.module.scss';

export interface PostHeaderProps {
  title: string;
  editorName?: string;
  tags?: string[];
  postDate?: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, editorName, tags, postDate }) => {
  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{title}</h1>
      {editorName && <div className={styles.editorName}>{editorName}</div>}
      {postDate && <div className={styles.editDate}>{timeForToday(postDate)}</div>}
     {tags && <TagList isEditable={false} tagList={tags} /> }
    </div>
  );
};

export default PostHeader;
