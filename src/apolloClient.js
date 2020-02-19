import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { gql } from "apollo-boost";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
});

// const link = new HttpLink({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });

const apolloClient = new ApolloClient({
    cache,
    link,
});

// apolloClient
//     .query({
//         query: gql`
//       {
//      stops {
//             gtfsId
//             name
//             lat
//             lon
//             zoneId
//            }
//     }
//     `
//     })
//     .then(result => console.log(result));

export default apolloClient;