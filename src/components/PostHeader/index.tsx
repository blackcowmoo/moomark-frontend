import TagList from '@components/TagList';
import styles from './postHeader.module.scss';

export interface PostHeaderProps {
  title: string;
  editorName?: string;
  tags?: string[];
  postDate?: Date;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{props.title}</h1>
      {props.editorName && <div className={styles.editorName}>{props.editorName}</div>}
      {props.postDate && <div className={styles.editDate}>{props.postDate.toString()}</div>}
     {props.tags && <TagList isEditable={false} tagList={props.tags} /> }
    </div>
  );
};

export default PostHeader;
