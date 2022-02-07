import Link from 'next/link';
import { useEffect, useState } from 'react';
import { timeForToday } from 'utils/common';
import { IPostList } from 'types';
import { HomePageListMock } from 'utils/mock';

import styles from './TablePostList.module.scss';

interface ITablePostList {
  listTitle: string;
  currentPage: number;
  range: number;
}

interface IPostListFooter {
  startPage: number;
  endPage: number;
}

const TablePostList: React.FC<ITablePostList> = ({ listTitle, currentPage, range }) => {
  const [postList, setPostList] = useState<IPostList[]>([]);
  const [totalListCount, setTotalListCount] = useState<number>(0);
  const [pageList, setPageList] = useState<number[]>([]);
  const [isNextButton, setIsNextButton] = useState<boolean>(false);
  const [isPrevButton, setIsPrevButton] = useState<boolean>(false);
  const listSize = 10;
  useEffect(() => {
    setTotalListCount(2000);
  });
  useEffect(() => {
    //Query via currentpage, rowCount
    setPostList(HomePageListMock);
    let { startPage, endPage }: IPostListFooter = {
      startPage: 0,
      endPage: 0,
    };

    startPage = (currentPage - 1) * listSize;
    endPage = range * listSize;
  }, [currentPage]);

  const renderFooter = () => {};

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
        <ul className={styles.pagination}>
        </ul>
      </div>
    </div>
  );
};

export default TablePostList;
