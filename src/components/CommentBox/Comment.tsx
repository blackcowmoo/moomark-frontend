import { CommentProps } from './index';
import styles from './comment.module.scss';

interface Props{
 comment: CommentProps;
}

const Comment:React.FC<Props> = ({comment}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles.comment__userProfile}>
          <img src={comment.info.profileImgSrc} alt={`${comment.info.userName}`} className={styles.comment_userImg} />
          {comment.info.userName}
        </div>
        <div className={styles.comment__date}>{comment.info.commentDate.toDateString()}</div>
      </div>

      <div className={styles.comment__text}>{comment.text}</div>
      {comment.reply ? <div className={styles.reply}>`${comment.reply.length} 개의 댓글 `</div> : <div className={styles.reply}>댓글이 읎어요</div>}
    </div>
  );
};

export default Comment;
