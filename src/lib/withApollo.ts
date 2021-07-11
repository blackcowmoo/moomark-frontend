import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { withApollo } from 'next-with-apollo';

const prod = process.env.NODE_ENV === 'production';

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      uri: prod ? '' : 'http://localhost:4004',
    }),
);
