import Link from 'next/link';
import { useEffect, useState } from 'react';
import { timeForToday } from 'utils/common';
import { IPostList } from 'types';
import { HomePageListMock } from 'utils/mock';
import Pagination from './Pagination';

import styles from './TablePostList.module.scss';

interface ITablePostList {
  listTitle: string;
  postsPerPage: number;
}

interface IPostListFooter {
  startPage: number;
  endPage: number;
}

const TablePostList: React.FC<ITablePostList> = ({ listTitle,  postsPerPage }) => {
  const [currentPage, setCurrentPage ] = useState<number>(1);
  const [postList, setPostList] = useState<IPostList[]>([]);
  const [totalPostCount, setTotalPostCount] = useState<number>(0);

  useEffect(() => {
    setTotalPostCount(100);
  }, []);
  useEffect(() => {
    //Query via currentpage, rowCount
    setPostList(HomePageListMock);

    function rangeArray(size: number, startAt = 0) {
      return [...Array(size).keys()].map((i) => i + startAt);
    }
  }, [currentPage]);

  const paginate= (input: number) => {
    setCurrentPage(input);
  }

  return (
    <div className={styles.TablePostList}>
      <h2>{listTitle}</h2>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>글쓴이</th>
            <th>🍕</th>
            <th>댓글수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {postList.map(({ title, author, like, commentCount, date, id }) => {
            return (
              <tr>
                <td className={styles.title}>
                  <Link href={`/post/${id}`}>
                    <a>{title}</a>
                  </Link>
                </td>
                <td>
                  <Link href={`/user/${author}`}>
                    <a>{author}</a>
                  </Link>
                </td>
                <td>{like}</td>
                <td>{commentCount || 0}</td>
                <td>{timeForToday(date)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.footer}>
        <Pagination totalPostCount={totalPostCount} limit = {postsPerPage} currentPage={currentPage} setPage={paginate} />
      </div>
    </div>
  );
};

export default TablePostList;
