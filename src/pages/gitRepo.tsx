import { Header } from "../components/Header"
import { Repo } from "../components/Repo/Repo"
import { perfil } from "../config"

const GitRepo = () => {
  return <>
    <Header />
    
    <Repo perfil={perfil} />
  </>
  
}
export { GitRepo } 