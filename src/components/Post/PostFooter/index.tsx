import { useState } from 'react';

import styles from './PostFooter.module.scss';

interface IPostFooter {
  likeCount: number;
  liked: boolean;
}

const PostFooter: React.FC<IPostFooter> = ({ liked, likeCount }) => {
  const [isLike, setIsLike] = useState<boolean>(liked);

  const toggleLikeButton = () => {
    // QUERY ADD TOGGLE LIKE
    setIsLike((prev) => !prev);
  };

  return (
    <div className={styles.PostFooter}>
      <div className={styles.likeWrapper}>
        <div id='likePost' className={liked ? styles.activeLike : styles.default} onClick={toggleLikeButton}>
          추천 🍕
          {likeCount + Number(isLike)}
        </div>
      </div>
      <div className={styles.reportWrapper}>🚨 report</div>
    </div>
  );
};

export default PostFooter;
