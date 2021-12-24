import Modal from '@components/common/Modal';
import { useModal } from 'utils/hooks/useModal';
import HttpHeaderModifier from './HttpHeaderModifier';
import styles from './HttpHeaderModifier.module.scss';

const index = () => {
  const { isShown, toggle } = useModal();
  return (
    <div>
      <button className={styles.button} onClick={toggle}>
        🐮
      </button>
      <Modal title='Http Client Header Custom' isShown={isShown} onClose={toggle} content={<HttpHeaderModifier />} />
    </div>
  );
};

export default index;
