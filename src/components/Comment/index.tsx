import { ICommentContent } from 'types/post';

import CommentInputForm from './CommentInputForm';
import CommentContent from './CommentContent';

import styles from './Comment.module.scss';

type Props = {
  comments?: ICommentContent[];
};

const Comment: React.FC<Props> = ({ comments }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.comment}>
        <CommentInputForm />
        {comments?.map((item, index) => (
          <CommentContent comment={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
