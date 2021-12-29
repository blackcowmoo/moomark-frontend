import { useState } from 'react';
import { ICommentContent } from '../index';
import Reply from '../Reply';
import CommentInfo from './CommentInfo';
import CommentInputForm from './CommentInputForm';
import styles from './Content.module.scss';

interface Props {
  comment: ICommentContent;
}

interface IContentText {
  text: string;
}

export const ContentText: React.FC<IContentText> = ({ text }) => {
  return (
    <div className={styles.ContentText}>
      <p>{text}</p>
    </div>
  );
};

const Comment: React.FC<Props> = ({ comment }) => {
  const { info, reply } = comment;
  const { user, date } = info;
  const [showReply, setshowReply] = useState(false);
  const toggleReply = () => {
    setshowReply(!showReply);
  };

  return (
    <div className={styles.Content}>
      <CommentInfo user={user} date={date} />
      <ContentText text={comment.text} />
      
      <div className={styles.replyContainer}>
        {reply ? (
          <div className={styles.toggleButton} onClick={toggleReply}>
            <span>{showReply ? '🐄  접기' : `🐮 ${reply.length} 개의 댓글`}</span>
            {showReply && reply.map((item, index) => <Reply info={item.info} text={item.text} like={item.like} key={index} />)}
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
