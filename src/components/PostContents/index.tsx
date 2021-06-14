import { useState } from 'react';
import MarkdownRender from '@components/MarkdownRender';
import HeadingAnchor, { markDownID } from '@components/HeadingAnchor';

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
