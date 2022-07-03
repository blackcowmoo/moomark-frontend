import styles from './PostList.module.scss';

type SkeletopProps = {
  width: number;
};

const SkeletonItem: React.FC<SkeletopProps> = ({ width }) => {
  return <div className={styles.skeleton} style={{ width: `${width}px` }}></div>;
};

const SkeletonPostListItem = () => {
  return (
    <div className={styles.PostListItem}>
      <div className={styles.content}>
        <h4>
          <SkeletonItem width={200} />
        </h4>
        <p className={styles.description}>
          <SkeletonItem width={100} />
          <SkeletonItem width={150} />
          <SkeletonItem width={120} />
        </p>
      </div>
      <div className={styles.footer}>
        <SkeletonItem width={50} />
        <SkeletonItem width={100} />
      </div>
    </div>
  );
};

export default SkeletonPostListItem;
