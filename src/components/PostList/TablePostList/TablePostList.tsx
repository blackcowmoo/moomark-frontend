import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { timeForToday, isNumeric } from 'utils/common';
import { IPostList } from 'types';
import { HomePageListMock } from 'utils/mock';
import Pagination from './Pagination';

import styles from './TablePostList.module.scss';

interface ITablePostList {
  listTitle: string;
  postsPerPage: number;
}

const TablePostList: React.FC<ITablePostList> = ({ listTitle, postsPerPage }) => {
  const { page } = useRouter().query;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postList, setPostList] = useState<IPostList[]>([]);
  const [totalPostCount, setTotalPostCount] = useState<number>(0);

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;

  // const currentPosts = postList.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    // Mocking
    setTotalPostCount(100);
    if (isNumeric(page)) setCurrentPage(Number(page));
  }, [page]);
  useEffect(() => {
    // Query via currentpage, rowCount
    // console.log(currentPage);

    setPostList(HomePageListMock);
  }, [currentPage]);

  const paginate = (input: number) => {
    setCurrentPage(input);
  };

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
          {postList.map(({ title, author, like, commentCount, date, id }, index) => {
            return (
              <tr className={index % 2 ? styles.odd : styles.even} key={index}>
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
        <Pagination totalPostCount={totalPostCount} pageRange={postsPerPage} currentPage={currentPage} setPage={paginate} />
      </div>
    </div>
  );
};

export default TablePostList;
