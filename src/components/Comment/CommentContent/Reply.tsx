import { IReply } from 'types/post';
import Content from './Content';
import CommentInputForm from '../CommentInputForm';

import styles from './CommentContent.module.scss';

interface IReplyComponents {
  showReply: boolean;
  toggleReply: () => void;
  reply: IReply[];
}

const Reply: React.FC<IReplyComponents> = ({ reply, showReply, toggleReply }) => {
  return (
    <div className={styles.Reply}>
      <div className={styles.toggleButton} onClick={toggleReply}>
        <span>{showReply ? '접기' : `${reply.length} 개의 댓글`}</span>
      </div>
      {showReply && (
        <div className={styles.ContentContainer}>
          {reply.map((item, index) => (
            <Content key={index} info={item.info} content={item.content} recommendCount={item.recommendCount} />
          ))}
          <CommentInputForm />
        </div>
      )}
    </div>
  );
};

export default Reply;
