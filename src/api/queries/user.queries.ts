import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LogIn($type: String!, $code: String!) {
    login(type: $type, code: $code) {
      token
      refreshToken
      user {
        email
        nickname
        picture
        role
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      email
      nickname
      picture
      role
    }
  }
`;
