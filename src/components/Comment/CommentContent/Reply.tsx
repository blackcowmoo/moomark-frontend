import { IReply } from '@components/Comment';
import CommentInfo from './CommentInfo';
import CommentInputForm from './CommentInputForm';
import { ContentText } from '.';
import styles from './CommentContent.module.scss';

const ReplyContent: React.FC<IReply> = ({ info, text, like }) => {
  const { user, date } = info;
  return (
    <div className={styles.reply}>
      <CommentInfo user={user} date={date} />
      <ContentText text={text} />
      <div> 👍{like}</div>
    </div>
  );
};

interface IReplyComponents {
  showReply: boolean;
  toggleReply: () => void;
  reply: IReply[];
}

const Reply: React.FC<IReplyComponents> = ({ reply, showReply, toggleReply }) => {
  return (
    <div className={styles.Reply}>
      <div className={styles.toggleButton} onClick={toggleReply}>
        <span>{showReply ? '🐄  접기' : `🐮 ${reply.length} 개의 댓글`}</span>
      </div>
      {showReply && (
        <div className={styles.ContentContainer}>
          {reply.map((item, index) => (
            <ReplyContent key={index} info={item.info} text={item.text} like={item.like} />
          ))}
          <CommentInputForm />
        </div>
      )}
    </div>
  );
};

export default Reply;
