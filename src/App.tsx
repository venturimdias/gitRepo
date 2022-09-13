import styled from 'styled-components'
import { Repo } from './components/Repo/Repo'
import { MemoryIcon } from './components/svg/Icons'
import { User } from './components/User/User'
import GlobalStyle from './styles/global'

function App() {
  const perfil = "venturimdias" 
  // const perfil = "ErickPetru"

  return (
    <div className="App">
      <GlobalStyle />
      <H1>
        <div className='logo'><MemoryIcon /> gitRepos</div>     
        <div><User perfil={perfil} /></div>
      </H1>
      <Repo perfil={perfil} />
    </div>
  )
}
const H1 = styled.h1`
  position: relative;
  justify-content: space-between;

  .logo{
    display:flex;
    align-items: center;
    gap:10px;
  }
`
export default App
