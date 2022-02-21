import TagList from '@components/common/TagList';
import { timeForToday } from 'utils/common';
import HeadingList, { markDownID } from './HeadingList';

import styles from './PostHeader.module.scss';

export interface PostHeaderProps {
  title: string;
  editorName: string;
  tags?: string[];
  postDate: Date;
  anchorList?: markDownID[];
  focusAnchor?: string;
  view: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, editorName, tags, postDate, anchorList, focusAnchor = '', view }) => {
  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.writerWrapper}>
        <div className={styles.left}>
          <div className={styles.editorName}>{editorName}</div>
          <div className={styles.editDate}>{timeForToday(postDate)}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.view}>{view}명 읽음</div>
        </div>
      </div>
      {tags && <TagList isEditable={false} tagList={tags} />}
      {anchorList && <HeadingList anchorList={anchorList} focusAnchor={focusAnchor} />}
    </div>
  );
};

export default PostHeader;
