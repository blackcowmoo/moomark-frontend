import React from 'react';
import { mockUserPageProfile } from 'utils/mock';
import styles from './User.module.scss';

export interface IUserProfile {
  userName: string;
  userProfileImg: string;
  postCount: number;
  commentCount: number;
  likeCount: number;
}

interface props {
  props?: IUserProfile;
}

interface ICountInfo {
  name: string;
  count: number;
}

const CountInfo: React.FC<ICountInfo> = ({ name, count }) => {
  return (
    <div className={styles.countInfo}>
      <dt>{name}</dt>
      <dd>{`${count}개`}</dd>
    </div>
  );
};

const UserProfile: React.FC<props> = ({ props = mockUserPageProfile }) => {
  const { userName, userProfileImg, postCount, commentCount, likeCount } = props;
  return (
    <div className={styles.UserProfile}>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <img src={userProfileImg} />
          <h3>{userName}</h3>
        </div>
      </div>
      <div className={styles.userLog}>
        <CountInfo name='작성글' count={postCount} />
        <CountInfo name='댓글 수' count={commentCount} />
        <CountInfo name='받은 좋아요' count={likeCount} />
      </div>
    </div>
  );
};

export default UserProfile;
