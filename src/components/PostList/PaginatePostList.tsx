import { useState } from 'react';
import { IPostList } from 'types/post';
import PostList, { Props as PostListProps } from '.';

interface Props extends PostListProps {}

const PaginatePostList: React.FC<Props> = ({ listTitle, posts }) => {
  const [articles, setArticles] = useState<IPostList[]>(posts);
  return (
    <div>
      <PostList posts={articles} listTitle={listTitle} />
    </div>
  );
};

export default PaginatePostList;
