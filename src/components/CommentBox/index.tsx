import styles from './comment.module.scss';
import Comment from './Comment';

interface CommentInfo{
  profileImgSrc?: string;
  userName: string;
  commentDate: Date;
}

interface Reply {
  info: CommentInfo;
  text: string;
}

export interface CommentProps{
  info: CommentInfo;
  reply?: Reply[]; 
  text: string;

}

interface Props {
  comments?: CommentProps[];
}

const CommentBox = ( {comments}: Props) => {
  
  return(
    <div className={styles.comment}> 
        {comments?.map((v) => (
          <Comment comment={v} />
        ))}
    </div>
  )
}

export default CommentBox;