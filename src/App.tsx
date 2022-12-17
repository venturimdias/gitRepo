import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PgError } from './pages/pgError';
import { GitRepo } from './pages/gitRepo';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { News } from './pages/news';

import GlobalStyle from './styles/global'

interface RouterProps{
  title: string,
  path: string,
  element: any,
  errorElement?: any
}

export const routerList : RouterProps[] = [
  { title:"home", path: "/", element: <Home />, errorElement: <PgError /> },
  { title:"sobre", path: "/sobre", element: <Sobre /> },
  { title:"news", path: "/news", element: <News /> },
  { title:"git", path: "/git-repo", element: <GitRepo /> },
]

const router = createBrowserRouter(routerList);
const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}>
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  </QueryClientProvider>
}
export default App
