import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const apolloConfig = () => {
  //@ts-ignore
  const httpLink = createHttpLink({ uri: `${process.env.REACT_APP_GITHUB_URL_GRAPHQL || github.graphql_url || 'not env'}`, })
  const authLink = setContext((_, { headers }) => {

    return {
      headers: {
        ...headers,
        //@ts-ignore
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN || github.token || 'not env'}`,
      }
    }
  })

  const client = new ApolloClient({
    // uri: 'https://flyby-gateway.herokuapp.com/',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return { client }
}
export { apolloConfig, ApolloProvider }