import { useState, useCallback } from 'react';
import Comment, { ICommentContent } from '@components/Comment';
import PostHeader from '@components/Post/PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { markDownID } from './PostHeader/HeadingList';
import { mockPost } from './mockdata';

import styles from './PostViewer.module.scss';

export type LikeType = 0 | 1 | -1;

export interface IPost {
  title: string;
  postDate: Date;
  editorName: string;
  content: string;
  tags: string[];
  comment?: ICommentContent[];
  likeCount: number;
  liked: LikeType;
  view: number;
}

// export const mockProps = mockData;

interface postViewerProps {
  postProps?: IPost;
}

const Post: React.FC<postViewerProps> = ({ postProps = mockPost }) => {
  const { title, postDate, editorName, content, tags, comment, view, likeCount, liked } = postProps;
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
      <PostHeader title={title} editorName={editorName} tags={tags} postDate={postDate} anchorList={anchorList} focusAnchor={focusAnchor} view={view} />
      <PostContent markdown={content} updateAnchorList={updateAnchorList} updateFocusAnchor={updateFocusAnchor} />
      <PostFooter liked={liked} likeCount={likeCount} />
      <Comment comments={comment} />
    </div>
  );
};

export default Post;
