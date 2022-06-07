import { gql } from '@apollo/client';

export const POSTS = gql`
  query Posts($offset: Int, $limit: Int) {
    posts(offset: $offset, limit: $limit) {
      title
      content
      uploadTime
      recommendCount
      viewsCount
      id
    }
  }
`;
