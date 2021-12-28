import styles from './comment.module.scss';
import Content from './Content';

interface IUserProfile {
  profileImgSrc?: string;
  name: string;
}

interface ICommentInfo {
  user: IUserProfile;
  date: Date;
}

interface IReply {
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
      {comments?.map((v, index) => (
        <Content comment={v} key={index} />
      ))}
    </div>
  );
};

export default Comment;
