import styles from './comment.module.scss';

interface CommentInfo{
  profileImgSrc?: string;
  userName: string;
  commentDate: Date;
}

interface Reply{
  info: CommentInfo;
  text: string;
}

export interface CommentProps{
  info: CommentInfo;
  reply?: Reply[]; 
  text: string;

}

interface Props {
  comments: CommentProps;
}

const Comment = ( {comments}: Props) => {
  return(
    <div className={styles.comment}> 
      {
        comments.reply && <div>`${comments.reply.length} 개의 댓글 `</div>
      }
    </div>
  )
}

export default Comment;