import React, { useState, useRef, useEffect } from 'react';
import MarkdownRender from '@components/MarkdownRender';
import HeadingAnchor, { markDownID } from '@components/HeadingAnchor';
import styles from './postcontents.module.scss';

interface Props {
  contents: string;
}



const PostContents: React.FC<Props> = ({ contents }) => {
  const [anchorList, setAnchorList] = useState<markDownID[]>([]);
  const [focusAnchor, setFocusAnchor] = useState<string>('');

  const syncAnchorList = (value: markDownID[]) => {
    setAnchorList([...value]);
  };
  const syncFocusAnchor = (anchorID: string) => {
    console.log(anchorID);
    
    setFocusAnchor(anchorID);
  };

  return (
    <div className='postcontents' >
      <HeadingAnchor anchorList={anchorList} focusAnchor={focusAnchor} />
      <MarkdownRender markdown={contents} updateFocusAnchor ={syncFocusAnchor} updateAnchorList={syncAnchorList} />
    </div>
  );
};

export default PostContents;
