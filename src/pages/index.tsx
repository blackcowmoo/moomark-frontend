import MainLayout from '@components/layout/MainLayout';
import TilePostList from '@components/PostList/TilePostList';
import DefaultPostList from '@components/PostList/DefaultPostList';
import { TilePostProps, PostListViewProps } from 'types';

const date = new Date(2021, 2, 10);

const tileMock:TilePostProps [] = [

  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
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

const Index = () => {
  return (
    <MainLayout>
      {/* <Link href='/post'><a>post</a></Link>
      <Link href='/edit'><a>edit</a></Link> */}
      <h1>mooMark main</h1>
      <TilePostList listTitle={'Tile'} postList={tileMock}/>
      <DefaultPostList listTitle={'Default'} postList={mock}/>
    </MainLayout>
  );
};

export default Index;
