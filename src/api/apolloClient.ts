import { ApolloClient, InMemoryCache } from '@apollo/client';

const prod = process.env.NODE_ENV === 'production';

const client = new ApolloClient({
  uri: prod ? `${process.env.PROD_APOLLO_CLIENT_URI}/graphql` : `${process.env.PROD_APOLLO_CLIENT_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
