import { IReply } from '@components/Comment';
import styles from './Comment.module.scss';

const Reply: React.FC<IReply> = ({ info, text }) => {
  const {
    user,
  } = info;
  return (
    <div className={styles.reply}>
      <div className={styles.commentInfo}>{info.user}</div>
      <div className={styles.commentText}>{text}</div>
      <button>댓글 추가</button>
    </div>
  );
};

export default Reply;
