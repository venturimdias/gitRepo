import styled from "styled-components"
import { theme } from "../../theme/theme"

interface IStack{
  titulo?: string,
  num?: number,
  color?: string,
}
const Stack = ({ titulo, num, color } : IStack) => {
  return <>
    <div>
      <Barra num={num} color={color}></Barra>

      <Titulo>
        <span>{titulo?.toUpperCase()}</span> 
        <span>{num && num +"%"}</span>
      </Titulo>
    </div>
  </>
}
const Barra = styled.div<IStack>`
  background:${theme.color.black800};
  height:10px;
  border-radius:5px;
  position:relative;
  overflow: hidden;

  :after{
    content:'';
    position:absolute;
    top:0px;
    left:-5px;
    width:${prop => prop.num ?  `${prop.num + 5}%`: 0};
    height:100%;
    background:${prop => prop.color ? prop.color : theme.color.prim800 };
    transform: skewX(-10deg);
  }
`
const Titulo = styled.div`
  font-size: 1.4rem;
  display:flex;
  gap:10px;
  padding:5px 2px;
`
export { Stack }