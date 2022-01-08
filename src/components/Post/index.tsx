import { useState, useCallback } from 'react';
import PostContent from './PostContent';
import Comment, { ICommentContent } from '@components/Comment';
import PostHeader from '@components/Post/PostHeader';
import { markDownID } from './PostHeader/HeadingList';
import mockData from './mockdata';

import styles from './PostViewer.module.scss';

export interface PostProps {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags: string[];
  comment?: ICommentContent[];
}

export const mockProps = mockData;

interface postViewerProps {
  postProp?: PostProps;
}

const Post: React.FC<postViewerProps> = ({ postProp = mockData }) => {
  const { title, postDate, editorName, content, tags, comment } = postProp;
  const [anchorList, setAnchorList] = useState<markDownID[]>([]);
  const [focusAnchor, setFocusAnchor] = useState<string>('');

  const updateAnchorList = useCallback((value: markDownID[]) => {
    setAnchorList([...value]);
  }, []);

  const updateFocusAnchor = useCallback((anchorID: string) => {
    setFocusAnchor(anchorID);
  }, []);

  return (
    <div className={styles.post}>
      <PostHeader title={title} editorName={editorName} tags={tags} postDate={postDate} anchorList={anchorList} focusAnchor={focusAnchor} />
      <PostContent markdown={content} updateAnchorList={updateAnchorList} updateFocusAnchor={updateFocusAnchor} />
      <Comment comments={comment} />
    </div>
  );
};

export default Post;
