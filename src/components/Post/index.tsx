import { useState, useCallback } from 'react';

import { IPostDetail } from 'types/post';
import Comment from '@components/Comment';
import PostHeader from '@components/Post/PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { markDownID } from './PostHeader/HeadingList';

import { mockPost } from './mockdata';

import styles from './PostViewer.module.scss';

interface postViewerProps {
  postProps?: IPostDetail;
}

const Post: React.FC<postViewerProps> = ({ postProps = mockPost }) => {
  const { title, uploadTime, user, content, tags, comment, viewsCount, recommendCount } = postProps;
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
      <PostHeader
        title={title}
        editorName={user.nickname}
        tags={tags}
        postDate={uploadTime}
        anchorList={anchorList}
        focusAnchor={focusAnchor}
        view={viewsCount}
      />
      <PostContent markdown={content} updateAnchorList={updateAnchorList} updateFocusAnchor={updateFocusAnchor} />
      <PostFooter liked={false} likeCount={recommendCount} />
      <Comment comments={comment} />
    </div>
  );
};

export default Post;
