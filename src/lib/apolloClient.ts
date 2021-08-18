import { ApolloClient, InMemoryCache } from '@apollo/client';

const prod = process.env.NODE_ENV === 'production';

const client = new ApolloClient({
  uri: prod ? 'localhost:4004' : 'localhost:4004',
  cache: new InMemoryCache(),
});

export default client;
