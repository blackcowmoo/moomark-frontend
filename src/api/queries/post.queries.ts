import { gql } from '@apollo/client';

const POST_LIST_FIELD = gql`
  fragment PostListFields on Post {
    user {
      nickname
      id
    }
    uploadTime
    recommendCount
    viewsCount
    title
    id
    content(length: 100, removeMarkdown: true)
  }
`;

export const GET_POSTLIST_MAIN = gql`
  ${POST_LIST_FIELD}
  query($limit: Int) {
    listPosts(limit: $limit) {
      posts {
        ...PostListFields
      }
    }
  }
`;

export const GET_POSTLIST_WITH_OFFSET = gql`
  ${POST_LIST_FIELD}
  query($offset: Int) {
    listPosts(limit: 10, offset: $offset) {
      posts {
        ...PostListFields
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
