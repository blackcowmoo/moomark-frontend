import { useState, useCallback } from 'react';
import AnchorList, { markDownID } from '@components/Post/PostContents/AnchorList';
import MarkdownRender from './MarkdownRender';

interface Props {
  contents: string;
}

const PostContents: React.FC<Props> = ({ contents }) => {
  const [anchorList, setAnchorList] = useState<markDownID[]>([]);
  const [focusAnchor, setFocusAnchor] = useState<string>('');

  const updateAnchorList = useCallback((value: markDownID[]) => {
    setAnchorList([...value]);
  }, []);

  const updateFocusAnchor = useCallback((anchorID: string) => {
    setFocusAnchor(anchorID);
  }, []);

  return (
    <>
      <AnchorList anchorList={anchorList} focusAnchor={focusAnchor} />
      <MarkdownRender markdown={contents} updateFocusAnchor={updateFocusAnchor} updateAnchorList={updateAnchorList} />
    </>
  );
};

export default PostContents;
