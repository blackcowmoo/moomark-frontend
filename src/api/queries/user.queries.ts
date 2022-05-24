import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LogIn($type: String!, $code: String!) {
    login(type: $type, code: $code) {
      token
      refreshToken
      user {
        name
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
      name
      email
      nickname
      picture
      role
    }
  }
`;
