import { gql } from '@apollo/client';

export const GET_POSTLIST_MAIN = gql`
  query($limit: Int) {
    listPosts(limit: $limit) {
      posts {
        user {
          nickname
          id
        }
        uploadTime
        recommendCount
        viewsCount
        title
        id
        content
      }
    }
  }
`;

export const GET_POSTLIST_WITH_OFFSET = gql`
  query($offset: Int) {
    listPosts(limit: 10, offset: $offset) {
      total
      posts {
        id
        uploadTime
        recommendCount
        viewsCount
        title
        content
        user {
          nickname
          id
        }
      }
    }
  }
`;

export const GET_POSTLIST_WITH_TOTAL = gql`
  query($limit: Int) {
    listPosts(limit: $limit) {
      total
      posts {
        user {
          nickname
          id
        }
        uploadTime
        recommendCount
        viewsCount
        title
        id
        content
      }
    }
  }
`;

export const GET_POST = gql`
  query Post($postId: Int!) {
    post(id: $postId) {
      id
      user {
        id
        email
        nickname
        picture
      }
      title
      content
      uploadTime
      recommendCount
      viewsCount
    }
  }
`;
