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

export const WRITE_POST = gql`
  mutation WritePost($post: PostInput!) {
    writePost(post: $post) {
      id
    }
  }
`;
