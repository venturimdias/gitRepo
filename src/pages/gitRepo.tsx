import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Repo } from "../components/Repo/Repo"
import { perfil } from "../config"

const GitRepo = () => {
  return <>
    <Header menuActive="git" />
    
    <Repo perfil={perfil} />

    <Footer />
  </>
  
}
export { GitRepo } 