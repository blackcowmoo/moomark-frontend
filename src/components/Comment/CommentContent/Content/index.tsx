import { IReply } from 'types/post';
import Header from './Header';
import Footer from './Footer';
import styles from './Content.module.scss';

interface IContentText {
  text: string;
}

export const ContentText: React.FC<IContentText> = ({ text }) => {
  return (
    <div className={styles.text}>
      <p>{text}</p>
    </div>
  );
};

const index: React.FC<IReply> = ({ info, content, recommendCount }) => {
  const { user, uploadTime } = info;
  return (
    <div className={styles.reply}>
      <Header user={user} uploadTime={uploadTime} />
      <ContentText text={content} />
      <Footer like={recommendCount} />
    </div>
  );
};

export default index;
