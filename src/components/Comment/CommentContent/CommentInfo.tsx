import { timeForToday } from 'utils/common';
import { ICommentInfo } from '..';
import styles from './CommentContent.module.scss';

const CommentInfo: React.FC<ICommentInfo> = ({ user, date }) => {
  const { profileImgSrc, name } = user;
  return (
    <div className={styles.CommentInfo}>
      <div className={styles.profile}>
        {profileImgSrc ? (
          <img src={profileImgSrc} alt={name} className={styles.userImg} />
        ) : (
          <img src='/mockprofile.PNG' alt={name} className={styles.userImg} />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{timeForToday(date)}</div>
      </div>
    </div>
  );
};

export default CommentInfo;
