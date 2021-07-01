import {useRef} from 'react';
import ToolBar from './ToolBar';
import styles from '../editor.module.scss';

interface editorProps{
  changeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkDownEditor:React.FC<editorProps> = (props) => {
  const {changeText} = props;
  const refTextArea = useRef<HTMLTextAreaElement>(null);

  return (
    <>
    <ToolBar targetTextArea={refTextArea}/>
    <textarea name='text' ref ={refTextArea}className={styles.textarea} onChange={changeText} />
    </>
  );
};

export default MarkDownEditor;
