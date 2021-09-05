import { ReactChild, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
  isShown: boolean;
  onClose: () => void;
  content: JSX.Element;
  title: string;
}

const index: React.FC<ModalProps> = ({ isShown, onClose, content, title }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const portalDiv = document.getElementById('modal-root');
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return null;
  } else {
    return portalDiv
      ? createPortal(
          isShown && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <div className={styles.header}>
                  <div className={styles.title}>{title}</div>
                  <a href='#' onClick={onClose}>
                    x
                  </a>
                </div>
                <div className={styles.body}>{content}</div>
              </div>
            </div>
          ),
          portalDiv,
        )
      : null;
  }
};

export default index;
