import { IReply } from '@components/Comment';
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

const index: React.FC<IReply> = ({ info, text, like }) => {
  const { user, date } = info;
  return (
    <div className={styles.reply}>
      <Header user={user} date={date} />
      <ContentText text={text} />
      <Footer like={like} />
    </div>
  );
};

export default index;
