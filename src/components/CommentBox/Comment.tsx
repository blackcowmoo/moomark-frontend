import { useState } from 'react';
import { CommentProps } from './index';
import Reply from './Reply';
import styles from './comment.module.scss';

interface Props {
  comment: CommentProps;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const [showReply, setshowReply] = useState(false);
  const toggleReply = () => {
    setshowReply(!showReply);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.userProfile}>
          {comment.info.profileImgSrc ? (
            <img src={comment.info.profileImgSrc} alt={`${comment.info.userName}`} className={styles.userImg} />
          ) : (
            <img src='/mockprofile.PNG' alt={`${comment.info.userName}`} className={styles.userImg} />
          )}
        </div>
        <div className={styles.commentInfo}>
          <div className={styles.userName}>{comment.info.userName}</div>
          <div className={styles.date}>{comment.info.commentDate.toDateString()}</div>
        </div>
      </div>

      <div className={styles.text}>{comment.text}</div>

      {comment.reply ? (
        <div className={styles.reply_container}>
          <button className={styles.toggleButton} onClick={toggleReply}>
            {showReply ? '닫기' : `${comment.reply.length} 개의 댓글`}
          </button>
          {showReply && comment.reply.map((item, index) => <Reply info={item.info} text={item.text} key={index} />)}
        </div>
      ) : (
        <div className={styles.noreply}>댓글이 읎어요</div>
      )}
    </div>
  );
};

export default Comment;
