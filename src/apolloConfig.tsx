import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const apolloConfig = () => {
  
  const httpLink = createHttpLink({ uri: `${process.env.REACT_APP_GITHUB_URL_GRAPHQL || 'https://api.github.com/graphql'}`, })
  const authLink = setContext((_, { headers }) => {

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN || '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'}`,
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