import styles from './comment.module.scss';
import Comment from './Comment';

interface CommentInfoProps{
  profileImgSrc?: string;
  userName: string;
  commentDate: Date;
}

export interface ReplyProps {
  info: CommentInfoProps;
  text: string;
}

export interface CommentProps{
  info: CommentInfoProps;
  text: string;
  reply?: ReplyProps[];
}

interface Props {
  comments?: CommentProps[];
}

const CommentBox = ({ comments }: Props) => {
  return (
    <div className={styles.comment}>
        {comments?.map((v) => (
          <Comment comment={v} key={v.text} />
        ))}
    </div>
  );
};

export default CommentBox;
