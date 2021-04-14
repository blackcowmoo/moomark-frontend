import { useState } from 'react';
import MarkdownRender from '@components/MarkdownRender';
import styles from './postcontents.module.scss';
import HeadingAnchor, {markDownID} from '@components/HeadingAnchor';

interface Props{
  contents: string;
};

// const initialAnchorList = [
//   {level: 0, }
// ]

const PostContents:React.FC<Props> = ({contents}) => {
  const [anchorList, setAnchorList] = useState<markDownID[]>([]);
  const syncAnchorList = ( value: markDownID[] ) => {
    setAnchorList([...value]);
  } 
  return (
    <div className={styles.contents}>
      <HeadingAnchor anchorList={anchorList}/>
      <MarkdownRender markdown={contents} updateAnchorList={syncAnchorList}/>
    </div>
  )

}

export default PostContents;