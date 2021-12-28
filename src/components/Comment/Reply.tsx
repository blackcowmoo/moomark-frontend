import { ReplyProps } from '@components/CommentBox';
import styles from './comment.module.scss';

const Reply: React.FC<ReplyProps> = ({ info, text }) => {
  return (
    <div className = {styles.reply}>
      <div className = {styles.commentInfo}>
        {info.userName}
      </div>
      <div className = {styles.commentText}>
        {text}
      </div>
      <button>댓글 추가</button>
    </div>
  );
};

export default Reply;
