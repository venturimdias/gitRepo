import styled from "styled-components"
import { Stack } from "./Stack"

interface IStackList{

}
const stackObj = [
  {titulo: "HTML", num: 90, color: ''},
  {titulo: "CSS", num: 90, color: ''}, 
  {titulo: "Javascript", num: 70, color: ''},
  {titulo: "Jquery", num: 80, color: ''},
  {titulo: "React.js", num: 70, color: ''},
  {titulo: "Next.js", num: 80, color: ''},
  {titulo: "Vue.js", num: 40, color: ''},
  {titulo: "Wordpress", num: 60, color: ''},
  {titulo: "Node.js", num: 60, color: '#DB5461'},
  {titulo: "PHP", num: 40, color: '#DB5461'},
  {titulo: "Python", num: 30, color: '#DB5461'},
  {titulo: "C#", num: 20, color: '#DB5461'},
  {titulo: "MySQL", num: 40, color: '#DB5461'},
  {titulo: "GraphQL", num: 40, color: '#DB5461'},
  {titulo: "Figma", num:70, color:"#777da7"},
  {titulo: "Illustrator", num:70, color:"#777da7"},
  {titulo: "Photoshop", num:70, color:"#777da7"},
  {titulo: "Indesign", num:50, color:"#777da7"},
]
const StackList = ({} : IStackList) => {
  return <>
    <br/>
      <h5>Stacks:</h5>
      <BoxStack>
        {stackObj.map((i, key) => {
          return <Stack key={key} titulo={i.titulo} num={i.num} color={i.color} />
        })}
      </BoxStack>
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
export { StackList }