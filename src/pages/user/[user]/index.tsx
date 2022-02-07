import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProfile, { IUserProfile } from '@components/User/UserProfile';
import DefaultPostList from '@components/PostList/DefaultPostList';
import TablePostList from '@components/PostList/TablePostList';
import { HomePageListMock } from 'utils/mock';

const UserPage = () => {
  const { user, page } = useRouter().query;
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
        <DefaultPostList listTitle={`${user}님이 작성한 글`} postList={HomePageListMock} />
        <TablePostList listTitle={`${user}님이 작성한 글`} currentPage={Number(page) || 1} range={10}  />
      </>
    </>
  );
};

export default UserPage;
