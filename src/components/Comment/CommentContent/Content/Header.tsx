import { timeForToday } from '@utils/common';
import { CommentInfo } from 'types/post';

import styles from './Content.module.scss';

const Header: React.FC<CommentInfo> = ({ user, uploadTime }) => {
  const { picture, nickname } = user;
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        {picture ? (
          <img src={picture} alt='user picture' className={styles.userImg} />
        ) : (
          <img src='/mockprofile.PNG' alt='default picture' className={styles.userImg} />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{nickname}</div>
        <div className={styles.date}>{timeForToday(uploadTime)}</div>
      </div>
    </div>
  );
};

export default Header;
