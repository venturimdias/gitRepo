import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { StackList } from '../components/Stack/StackList'
import { Container } from '../styles/global'

const Home = () => {
  return <>
    <Header />
    <Container>
      <h2>Olá!</h2>
      <h3>Sou Jonathan Venturim Dias, desenvolvedor front-end </h3>

      <StackList />
    </Container>
    <Footer />
  </>
}

export { Home } 