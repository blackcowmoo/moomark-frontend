import ReactMarkdown from 'react-markdown';
import styles from './markdown.module.scss';

interface Props{
  content: string;
}

const MarkDownRender:React.FC<Props> = ({content}) => {
  return (
    <div className={styles.markdown}>
     <ReactMarkdown>{content}</ReactMarkdown> 
    </div>
  )
}

export default MarkDownRender;

