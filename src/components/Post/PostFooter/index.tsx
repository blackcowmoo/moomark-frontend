import { useState, useEffect } from 'react';
import { LikeType } from '..';

import styles from './PostFooter.module.scss';

interface IPostFooter {
  likeCount: number;
  liked: LikeType;
}

const PostFooter: React.FC<IPostFooter> = ({ liked, likeCount }) => {
  const [isLike, setIsLike] = useState<LikeType>(0);

  useEffect(() => {
    setIsLike(liked);
  }, []);

  const toggleLikeButton = () => {
    // QUERY ADD TOGGLE LIKE
    setIsLike((prev) => (prev === 1 ? 0 : 1));
  };

  const toggleDislikeButton = () => {
    setIsLike((prev) => (prev === -1 ? 0 : -1));
  };

  return (
    <div className={styles.PostFooter}>
      <div className={styles.likeWrapper}>
        <div id='likePost' className={isLike === 1 ? styles.activeLike : styles.default} onClick={toggleLikeButton}>
          추천 🍕 
          {likeCount + isLike}
        </div>
        <div id='dislikePost' className={isLike === -1 ? styles.activeDislike : styles.default} onClick={toggleDislikeButton}>
          {isLike === -1 ? '비추 🐃' : '비추'}
        </div>
      </div>
      <div className={styles.reportWrapper}>🚨</div>
    </div>
  );
};

export default PostFooter;
