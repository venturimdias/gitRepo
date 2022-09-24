import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Repo } from "../components/Repo/Repo"
import { perfil } from "../config"

const GitRepo = () => {
  return <>
    <Header />
    
    <Repo perfil={perfil} />

    <Footer />
  </>
  
}
export { GitRepo } 