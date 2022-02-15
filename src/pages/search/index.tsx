import { useRouter } from 'next/router';
import { NextPage } from 'next';
import TileViewPostList from '@components/PostList/TileViewPostList';
import SearchForm from '@components/GlobalHeader/SearchForm';
import { HomePageTileMock } from 'utils/mock';

const SearchPage: NextPage = () => {
  const { q } = useRouter().query;

  return (
    <>
      <SearchForm searchInput={typeof q === 'string' ? q : ''} />
      <TileViewPostList postList={HomePageTileMock} />
    </>
  );
};

export default SearchPage;
