import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import useDebounce from 'utils/hooks/useDebounce';
import GridPostList from '@components/PostList/GridPostList';
import SearchForm from '@components/SearchForm';
import { HomePageTileMock } from 'utils/mock';
import { TilePostProps } from 'types';

const SearchPage: NextPage = () => {
  const { q } = useRouter().query;

  const [postList, setPostList] = useState<TilePostProps[]>(HomePageTileMock);
  const debouncedValue = useDebounce<TilePostProps[]>(postList, 500);

  // Fetch api
  useEffect(() => {
    // console.log(debouncedValue);
    console.log(q);
    setPostList(debouncedValue);
  }, [debouncedValue, q]);

  return (
    <>
      <SearchForm searchInput={typeof q === 'string' ? q : ''} />
      <GridPostList postList={postList} viewType='large' />
    </>
  );
};

export default SearchPage;
