import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import styles from './markdown.module.scss';

interface Props{
  markdown: string;
}

const MarkDownRender:React.FC<Props> = ({markdown}) => {
  const [contents, setContents] = useState(markdown);
  
  const onChangeText = (e: any) => {
    setContents(e.target.value);
  };
  return (
    <div className={styles.markdown}>
     <ReactMarkdown source={contents}/> 
    </div>
  )
}

export default MarkDownRender;
