import styles from './Content.module.scss';

interface ILike {
  like: number;
}

const Footer: React.FC<ILike> = ({ like }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.like}>
        <span>
          <a href='#'>
            👍
            {like}
          </a>
          <a href='#'>👎</a>
        </span>
      </div>
      <div className={styles.report}>
        <span>🚨</span>
      </div>
    </div>
  );
};

export default Footer;
