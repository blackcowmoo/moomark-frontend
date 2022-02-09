import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProfile, { IUserProfile } from '@components/User/UserProfile';
import TablePostList from '@components/PostList/TablePostList';

const UserPage = () => {
  const { user } = useRouter().query;
  const [userProfile, setUserProfile] = useState<IUserProfile | undefined>(undefined);
  useEffect(() => {
    if (typeof user === 'string') {
      setUserProfile({
        userName: user,
        userProfileImg: null,
        postCount: 503092,
        commentCount: 2103333,
        likeCount: 0,
      });
    }
  }, []);

  return (
    <>
      <UserProfile profile={userProfile} />
      <>
        <TablePostList listTitle={`${user}님이 작성한 글`} postsPerPage={10} />
      </>
    </>
  );
};

export default UserPage;
