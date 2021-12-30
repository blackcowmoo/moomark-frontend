import styles from './CommentInputForm.module.scss';

const index = () => {
  return (
    <div className={styles.commentInputForm}>
      <textarea placeholder='댓글 부탁해요.' />
      <div className={styles.buttonContainer}>
        <button>입력</button>
      </div>
    </div>
  );
};

export default index;
