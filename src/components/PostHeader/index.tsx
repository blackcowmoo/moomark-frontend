import styles from './postHeader.module.scss';

interface PostHeaderProps {
  title: string;
  editorName: string;
  tags?: string[];
  postDate: Date;
}

const PostHeader = ({ title, editorName, tags, postDate }: PostHeaderProps) => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.mockTitle}>{title}</div>
      <div className={styles.editorName}>{editorName}</div>
      <div className={styles.editDate}>{postDate.toString()}</div>
      <div className={styles.tags}>{tags?.map((v) => {v})}</div>
    </div>
  );
};

export default PostHeader;
