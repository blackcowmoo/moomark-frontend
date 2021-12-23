import { TilePostProps, PostListViewProps } from 'types';

const date = new Date(2021, 2, 10);
const desSample: string =
  '1. 주식을 사기 보다는 때를 사라.챠트는 시세의 길잡이다.2.숲을 먼저 보고 나무를 보아라.3.사는 것 보다 파는 것이 더 중요하다.4.자신에게 가장 알맞는 투자 방법을 개발하라. 5.대중이 가는 뒤안 길에 꽃길이 있다.';
export const HomePageTileMock: TilePostProps[] = [
  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: desSample,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: desSample,
  },
  {
    id: 0,
    title: '도지는 신이다',
    author: '영암머스크멜론',
    like: 0,
    tags: ['mockTag'],
    date,
    description: '화성 갈꺼니까',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['mockTag'],
    date,
    description: '123123',
  },
];

export const HomePageListMock: PostListViewProps[] = [
  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
];
