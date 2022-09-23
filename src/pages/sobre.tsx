import styled from "styled-components"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Container } from "../styles/global"
import { theme } from "../theme/theme"

const Sobre = () => {
  return <> 
    <Header />
    <Container>
      <h2>Sobre </h2>

      <h3>Jonathan Venturim Dias</h3>
      <Desc>
        Desenvolvedor Front-End | HTML | CSS | SASS | Styled-component | React.js | Next.js | Vue.js | Javascript
      </Desc>
      <p><small>Serra, Espírito Santo, Brasil </small></p>

      <p>Desenvolvedor Front-end da empresa Aldabra (www.aldabra.com.br) e JVD Soluções Web. Trabalho atualmente com as seguintes ferramentas: HTML, CSS, SCSS, Styled-component, Javascript, Jquery, VS Code, Mysql, React js, Next js, Vue js, Figma, Photoshop, Illustrator e Indesign. </p>

      <p>Tenho conhecimento básico em: Wordpress, CorelDraw, C#, SQL Server, PHP, Python, Node.js.</p>

      <p>Alguns trabalhos realizados: Missbela, Videbula, Vigauto, Ivetro, Rede Marcela, Novo site da União Engenharia, Bueraux de Marketing, Dikma, dentre outros.</p>

      <p>https://aldabra.com.br/clientes-e-projetos</p>

      <p>Github: https://github.com/venturimdias</p>

      <p>Extra:<br/>
      - Análise e desenvolvimento de um projeto para IE intercambio de gestão interna (IE control - PHP/MYSQL);<br/>
      - Curso online de Criação Publicitária para Web - 2011 (cursos.brunoavila.com.br);<br/>
      - Participei do 16º EDTED - RJ - Encontro de Design e Tecnologia Digital - 2011<br/>
      </p>
      {/* 
      <p>Trabalhos que já foram realizado:</p>
      zco.net.br
      loja.lamobilimoveis.com.br (personalização da loja)

      <p>brothersingranite.com</p>
      slabware.com
      ilhavixcorretoradeseguros.com.br
      shopdasvitaminas.com.br */}
    </Container>
    <Footer />
  </>
}

const Desc = styled.div`
  color:${theme.color.prim800}
`

export { Sobre }