import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import UserProfile, { IUserProfile } from '@components/User/UserProfile';
import DefaultPostList from '@components/PostList/DefaultPostList';
import { HomePageListMock } from 'utils/mock';

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
      <DefaultPostList listTitle={`${user}님 작성글`} postList={HomePageListMock} />
    </>
  );
};

export default UserPage;
