import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query($offset: Int, $limit: Int) {
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

export const GET_POSTLIST = gql`
  query($offset: Int, $limit: Int) {
    posts(offset: $offset, limit: $limit) {
      id
      title
      uploadTime
      recommendCount
      viewsCount
      user {
        nickname
      }
    }
  }
`;
