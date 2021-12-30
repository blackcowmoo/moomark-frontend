import { useState } from 'react';
import { ICommentContent } from '../index';
import Content from './Content';
import Reply from './Reply';
import CommentInputForm from '../CommentInputForm';
import styles from './CommentContent.module.scss';

interface Props {
  comment: ICommentContent;
}

const CommentContent: React.FC<Props> = ({ comment }) => {
  const { info, reply, text, like } = comment;
  const [showReply, setshowReply] = useState(false);
  const [openInputForm, setOpenInputForm] = useState(false);

  const toggleReply = () => {
    setshowReply(!showReply);
  };

  const toggleInputForm = () => {
    setOpenInputForm((prev) => !prev);
  };

  return (
    <div className={styles.Content}>
      <Content info={info} text={text} like={like} />
      {reply ? (
        <Reply reply={reply} showReply={showReply} toggleReply={toggleReply} />
      ) : (
        <button className={styles.toggleButton} onClick={toggleInputForm}>
          {openInputForm ? '접기' : '댓글 달기' }
        </button>
      )}
      {openInputForm && <CommentInputForm />}
    </div>
  );
};

export default CommentContent;
