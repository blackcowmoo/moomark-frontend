import { useState, useEffect, useCallback } from 'react';
import MarkdownRender from './MarkdownRender';
import AnchorList, { markDownID } from '@components/PostContents/AnchorList';

interface Props {
  contents: string;
}

const PostContents: React.FC<Props> = ({ contents }) => {
  const [anchorList, setAnchorList] = useState<markDownID[]>([]);
  const [focusAnchor, setFocusAnchor] = useState<string>('');

  const syncAnchorList = (value: markDownID[]) => {
    setAnchorList([...value]);
  }

  // const updateFocusAnchor = useCallback((anchorID: string) => {
  //   setFocusAnchor(anchorID);
  // }, [focusAnchor]);

  const updateFocusAnchor = (anchorID:string) => {
    setFocusAnchor(anchorID)
  }

  return (
    <div className='postcontents'>
      <AnchorList anchorList={anchorList} focusAnchor={focusAnchor} />
      <MarkdownRender markdown={contents} updateFocusAnchor={updateFocusAnchor} updateAnchorList={syncAnchorList} />
    </div>
  );
};

export default PostContents;
