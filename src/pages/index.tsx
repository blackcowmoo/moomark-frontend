import Link from 'next/link';
import MainLayout from '@components/layout/MainLayout';
import DefaultPostList from '@components/PostList/DefaultPostList';
import { PostListViewProps} from 'types';

const date = new Date(2021,2,10);

const mock: PostListViewProps[] =[
  {
    id: 0,
    title: "mockTitle",
    author: "gosu",
    like: 222,
    tags: ["응애"],
    date: date 
  },
  {
    id: 0,
    title: "ddd",
    author: "gosu",
    like: 222,
    tags: ["응애"],
    date: date 
  },
  {
    id: 0,
    title: "ddd",
    author: "gosu",
    like: 222,
    tags: ["응애"],
    date: date 
  },
  {
    id: 0,
    title: "ddd",
    author: "gosu",
    like: 222,
    tags: ["응애"],
    date: date 
  },
]



const Index = () => {
  return (
    <MainLayout>
      {/* <Link href='/post'><a>post</a></Link>
      <Link href='/edit'><a>edit</a></Link> */}
      <h1>mooMark main</h1>
      <DefaultPostList listTitle={'Trending'} postList={mock}/>
      <DefaultPostList listTitle={'New'} postList={mock}/>
    </MainLayout>
  );
};

export default Index;
