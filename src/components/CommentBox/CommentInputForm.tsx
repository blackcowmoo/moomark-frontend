import styles from './comment.module.scss';

const CommentInputForm = () => {
  return (
    <div className = {styles.commentInputForm}>
      <textarea placeholder='댓글을 입력해주세요.'/>
      <div className = {styles.buttonWrapper}>

      </div>
    </div>
  );
};

export default CommentInputForm;
