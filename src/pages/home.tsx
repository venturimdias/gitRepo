import styled from 'styled-components'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Stack } from '../components/Stack/Stack'
import { Container } from '../styles/global'

const Home = () => {
  return <>
    <Header />
    <Container>
      <h2>Olá!</h2>
      <h3>Sou Jonathan Venturim Dias, desenvolvedor front-end </h3>

      <br/>
      <h5>Stacks:</h5>
      <BoxStack>
        <Stack titulo="HTML" num={90} />
        <Stack titulo="css" num={90} />
        <Stack titulo="jquery" num={80} />
        <Stack titulo="javascript" num={75} />

        <Stack titulo="React.js" num={65} />
        <Stack titulo="Next.js" num={80} />

        <Stack titulo="Vue.js" num={50} />

        <Stack titulo="MySQL" num={30} color="#DB5461"/>
        <Stack titulo="Node.js" num={50} color="#DB5461"/>
        <Stack titulo="C#" num={20} color="#DB5461"/>
        <Stack titulo="PHP" num={20} color="#DB5461"/>
        <Stack titulo="PYTHON" num={20} color="#DB5461"/>

        <Stack titulo="Figma" num={70} color="#777da7"/>
        <Stack titulo="Illustrator" num={70} color="#777da7"/>
        <Stack titulo="Photoshop" num={70} color="#777da7"/>
        <Stack titulo="Indesign" num={40} color="#777da7"/>
      </BoxStack>

    </Container>
    <Footer />
  </>
}

const BoxStack = styled.div`
  padding:20px 0 0;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:30px 40px;

  @media(max-width:960px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width:768px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width:480px){
    grid-template-columns: 1fr;
  }
`
export { Home } 