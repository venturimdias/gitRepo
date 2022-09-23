import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PgError } from './pages/pgError';
import { GitRepo } from './pages/gitRepo';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';

import GlobalStyle from './styles/global'

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <PgError /> },
  { path: "/sobre", element: <Sobre /> },
  { path: "/git-repo", element: <GitRepo /> },
]);

function App() {
  return <div className="App">
    <GlobalStyle />
    <RouterProvider router={router} />
  </div>
}
export default App
