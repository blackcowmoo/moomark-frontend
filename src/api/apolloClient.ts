import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client';

const prod = process.env.NODE_ENV === 'production';

const uri = prod ? process.env.PROD_APOLLO_CLIENT_URI : `${process.env.DEV_APOLLO_CLIENT_URI}/graphql`;

const httpLink = new HttpLink({ uri });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
