import Modal from '@components/common/Modal';
import styles from './HttpHeaderModifier.module.scss';
import { useModal } from 'utils/hooks/useModal';
const index = () => {
  const { isShown, toggle } = useModal();
  return (
    <div>
      <button className={styles.button} onClick={toggle}>
        🐮
      </button>
      <Modal title='Http Client Header Custom' isShown={isShown} onClose={toggle} content={<>custom contents</>} />
    </div>
  );
};

export default index;
