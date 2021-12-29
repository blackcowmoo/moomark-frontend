import styles from './Comment.module.scss';
import CommentContent from './CommentContent';

interface IUserProfile {
  profileImgSrc?: string;
  name: string;
}

export interface ICommentInfo {
  user: IUserProfile;
  date: Date;
}

export interface IReply {
  info: ICommentInfo;
  text: string;
  like: number;
}

export interface ICommentContent extends IReply {
  reply?: IReply[];
}

interface IComment {
  comments?: ICommentContent[];
}

const Comment: React.FC<IComment> = ({ comments }) => {
  return (
    <div className={styles.comment}>
      {comments?.map((item, index) => (
        <CommentContent comment={item} key={index} />
      ))}
    </div>
  );
};

export default Comment;
