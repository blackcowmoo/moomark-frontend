import { useEffect } from 'react';
import TagList from '@components/TagList';
import styles from './postHeader.module.scss';

interface PostHeaderProps {
  title: string;
  editorName: string;
  tags?: string[];
  postDate: Date;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, editorName, tags, postDate }) => {
  useEffect(() => {
    console.log(tags);
  });
  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.editorName}>{editorName}</div>
      <div className={styles.editDate}>{postDate.toString()}</div>
      <TagList isDeleteable={false} tagList={tags || ['응애']} />
    </div>
  );
};

export default PostHeader;
