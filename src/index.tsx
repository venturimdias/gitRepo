import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloProvider, apolloConfig } from './apolloConfig'
const { client } = apolloConfig()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

