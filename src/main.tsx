import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider, apolloConfig } from './apolloConfig'
const { client } = apolloConfig()

// import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)