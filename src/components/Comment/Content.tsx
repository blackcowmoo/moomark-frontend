import { useState } from 'react';
import { ICommentContent } from './index';
import Reply from './Reply';
import CommentInputForm from './CommentInputForm';
import { timeForToday } from 'utils/common';
import styles from './comment.module.scss';

interface Props {
  comment: ICommentContent;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { info, reply } = comment;
  const { user, date } = info;
  const [showReply, setshowReply] = useState(false);
  const toggleReply = () => {
    setshowReply(!showReply);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.userProfile}>
          {user.profileImgSrc ? (
            <img src={user.profileImgSrc} alt={`${user.name}`} className={styles.userImg} />
          ) : (
            <img src='/mockprofile.PNG' alt={`${user.name}`} className={styles.userImg} />
          )}
        </div>
        <div className={styles.commentInfo}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.date}>{timeForToday(date)}</div>
        </div>
      </div>

      <div className={styles.text}>{comment.text}</div>

      <div className={styles.replyContainer}>
        {reply ? (
          <div className={styles.toggleButton} onClick={toggleReply}>
            <span>{showReply ? '🐄  접기' : `🐮 ${reply.length} 개의 댓글`}</span>
            {showReply && reply.map((item, index) => <Reply info={item.info} text={item.text} key={index} />)}
          </div>
        ) : (
          <div className={styles.noreply}>
            <CommentInputForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
