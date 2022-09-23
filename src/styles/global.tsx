import styled, { createGlobalStyle } from 'styled-components'
import { theme } from '../theme/theme'

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    font-size:62.5%;
  }
  body{
    color:${theme.color.white};
    background:${theme.color.black700};
  }
  h1,h2,h4{ 
    font-weight: 900;
    line-height:180%;
  }
  h1{
    display:flex;
    padding:20px;
  }

  button,
  input,
  body{
    font-size:1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 160%;
  }
  h2{
    font-size:4.6rem;
  }
  h3{
    font-size:2.8rem;
    font-style: italic;
    font-weight: 400;
    line-height:180%;
  }
  h3,
  .t2{
    font-family: 'Libre Baskerville', serif;
  }

  h4{
    font-size:2.4rem;
  }
  p + p {
    margin-top:20px;
  }
  img{
    align-items: center;
    max-width:1200px;
    width: 100%;
    margin: auto;
  }  
  svg,
  svg path{
    fill:currentColor
  }

  a{
    text-decoration: none;
    color:currentColor;
  }
`

export const Container = styled.div`
  max-width:900px;
  width: 90%;
  margin:auto;
  padding:40px 0;
  position: relative;
`