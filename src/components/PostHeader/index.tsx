import styles from './postHeader.module.scss';

interface PostHeaderProps {
  title: string;
  editorName: string;
  tags?: string[];
  postDate: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, editorName, tags, postDate }) => {
  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.editorName}>{editorName}</div>
      <div className={styles.editDate}>{postDate.toString()}</div>
      <div className={styles.tags}>{tags?.map((v) => v)}</div>
    </div>
  );
};

export default PostHeader;
