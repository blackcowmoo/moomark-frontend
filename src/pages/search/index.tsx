import { useRouter } from 'next/router';
import { NextPage } from 'next';

import SearchForm from '@components/SearchForm';

const SearchPage: NextPage = () => {
  const { q } = useRouter().query;

  return (
    <>
      <SearchForm searchInput={typeof q === 'string' ? q : ''} />
    </>
  );
};

export default SearchPage;
