import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { withApollo } from 'next-with-apollo';

const prod = process.env.NODE_ENV === 'production';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      uri: prod ? '' : 'http://localhost:3000/graphql',
    })
);