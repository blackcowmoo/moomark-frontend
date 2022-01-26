import { mockUserPageProfile } from 'utils/mock';
import styles from './User.module.scss';

export interface IUserProfile {
  userName: string;
  userProfileImg: string | null;
  postCount: number;
  commentCount: number;
  likeCount: number;
}

interface props {
  profile?: IUserProfile;
}

interface ICountInfo {
  name: string;
  count: number;
}

const CountInfo: React.FC<ICountInfo> = ({ name, count }) => {
  return (
    <div className={styles.CountInfo}>
      <h3>{name}</h3>
      <div>{`${count}개`}</div>
    </div>
  );
};

const UserProfile: React.FC<props> = ({ profile = mockUserPageProfile }) => {
  const { userName, userProfileImg, postCount, commentCount, likeCount } = profile;
  return (
    <div className={styles.UserProfile}>
      <div className={styles.profile}>
        <img src={userProfileImg || '/mockprofile.png'} />
        <div className={styles.info}>{userName}</div>
      </div>
      <div className={styles.userLog}>
        <div className={styles.wrapper}>
          <CountInfo name='작성글' count={postCount} />
          <CountInfo name='댓글 수' count={commentCount} />
          <CountInfo name='받은 좋아요' count={likeCount} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
