import { IDefaultPostList } from '../DefaultPostList/DefaultPostList';

interface ITablePostList extends IDefaultPostList{
  totalPostCount: number;
  listSize: number;
  currentPage: number;
}
const TablePostList: React.FC<ITablePostList> = ({
  listTitle, postList, totalPostCount, listSize, currentPage
}) => {
  return <div></div>;
};

export default TablePostList;
