import { useRef } from 'react';
import ToolBar from './ToolBar';
import styles from '../PostEditor.module.scss';

interface editorProps {
  changeText: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
  text: string;
}

const MarkDownEditor: React.FC<editorProps> = ({ changeText, text }) => {
  const refTextArea = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <ToolBar refTextArea={refTextArea} />
      <textarea name='text' value={text} ref ={refTextArea} className={styles.textarea} onChange={changeText} />
    </>
  );
};

export default MarkDownEditor;
