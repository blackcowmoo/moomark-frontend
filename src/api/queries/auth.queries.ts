import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LogIn($type: String!, $code: String!) {
    login(type: $type, code: $code) {
      token
      refreshToken
    }
  }
`;
