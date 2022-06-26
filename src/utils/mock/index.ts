import { IPostList } from 'types/post';
import { IUserProfile } from '@components/User/UserProfile';

const mockDate = new Date(2021, 2, 10).toString();

export const HomePageListMock: IPostList[] = [
  {
    id: 1,
    title: '테스트 제목 Mock',
    author: 'MockUser',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
  {
    id: 2,
    title: '테스트 제목 Mock',
    author: 'MockUser',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
  {
    id: 3,
    title: '테스트 제목 Mock',
    author: 'blackCOw',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
  {
    id: 4,
    title: '테스트 제목 Mock',
    author: 'blackCOw',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
  {
    id: 5,
    title: '테스트 제목 Mock',
    author: 'blackCOw',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
  {
    id: 6,
    title: '테스트 제목 Mock',
    author: 'blackCOw',
    recommendCount: 222,
    viewsCount: 222,
    uploadTime: mockDate,
  },
];

export const mockUserPageProfile: IUserProfile = {
  userName: 'test유저',
  userProfileImg: null,
  postCount: 503092,
  commentCount: 2103333,
  likeCount: 0,
};
export const TablePostListMock: IPostList[] = [...HomePageListMock, ...HomePageListMock, ...HomePageListMock];
