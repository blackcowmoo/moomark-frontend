import TilePostList from '@components/PostList/TileViewPostList/TileViewPostList';
import DefaultPostList from '@components/PostList/DefaultPostList/DefaultPostList';
import { TilePostProps, PostListViewProps } from 'types';
import HomeLayout from '@components/layout/HomeLayout';

const date = new Date(2021, 2, 10);

const tileMock: TilePostProps[] = [
  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
];

const mock: PostListViewProps[] = [
  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
];

const HomePage = () => {
  return (
    <HomeLayout>
      <TilePostList listTitle={'인기'} postList={tileMock} />
      <DefaultPostList listTitle={'Default'} postList={mock} />
    </HomeLayout>
  );
};

export default HomePage;
