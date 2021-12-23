import TilePostList from '@components/PostList/TileViewPostList/TileViewPostList';
import DefaultPostList from '@components/PostList/DefaultPostList/DefaultPostList';
import HomeLayout from '@components/layout/HomeLayout';
import styles from '@components/layout/HomeLayout/HomeLayout.module.scss';
import { HomePageListMock, HomePageTileMock } from 'utils/mock';

const HomePage = () => {
  return (
    <HomeLayout>
      <div className={styles.tile}>
        <TilePostList listTitle={'인기'} postList={HomePageTileMock} />
      </div>
      <div className={styles.default}>
        <DefaultPostList listTitle={'해외 주식'} postList={HomePageListMock} />
        <DefaultPostList listTitle={'국내 주식'} postList={HomePageListMock} />
        <DefaultPostList listTitle={'암호 화폐'} postList={HomePageListMock} />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
