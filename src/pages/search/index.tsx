export interface SearchProps{
  search: string;
  searchType: string;
}

const SearchPage: React.FC<SearchProps> = (props) => {
  return (
    <>
    {props.search}
    {props.searchType}
    </>
  );
};

export default SearchPage;
