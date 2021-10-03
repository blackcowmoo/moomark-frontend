import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Close from './Close.svg';
import styles from './Modal.module.scss';

interface ModalProps {
  isShown: boolean;
  onClose: () => void;
  content: JSX.Element;
  title: string;
}

const index: React.FC<ModalProps> = ({ isShown, onClose, content, title }) => {
  const [portalDiv, setPortalDiv] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalDiv(document.getElementById('modal-root'));
  }, []);

  return portalDiv
    ? createPortal(
        isShown && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <button onClick={onClose}>
                  <Close fill='#999' />
                </button>
              </div>
              <div className={styles.body}>{content}</div>
            </div>
          </div>
        ),
        portalDiv,
      )
    : null;
};

export default index;
