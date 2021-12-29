import { useState } from 'react';
import { ICommentContent } from '../index';
import Reply from './Reply';
import CommentInfo from './CommentInfo';
import CommentInputForm from './CommentInputForm';
import styles from './CommentContent.module.scss';

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

const Content: React.FC<Props> = ({ comment }) => {
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
      {reply && <Reply reply={reply} showReply={showReply} toggleReply={toggleReply} />}
      <CommentInputForm />
    </div>
  );
};

export default Content;
