import ReactMarkdown from 'react-markdown';
import styles from './editor.module.scss';

interface previewPostProps{
  text: string;
}
const Preview:React.FC<previewPostProps> = (props) => {
  return (
    <div className={styles.preview}>
      <ReactMarkdown source={props.text}/>
    </div>
  )
}

export default Preview;