import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, from } from '@apollo/client';

// const prod = process.env.ENV === 'prod';

const uri = `${process.env.GATEWAY_URL}/graphql`;

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
  link: from([authMiddleware, httpLink]),
});

export default client;
