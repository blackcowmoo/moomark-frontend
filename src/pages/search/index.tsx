import HeadMeta from '@components/common/HeadMeta';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import SearchForm from '@components/SearchForm';

const SearchPage: NextPage = () => {
  const { q } = useRouter().query;

  return (
    <>
      <HeadMeta title='MooMark | Search Page' description='moomark search page' />
      <SearchForm searchInput={typeof q === 'string' ? q : ''} />
    </>
  );
};

export default SearchPage;
