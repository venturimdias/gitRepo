import styled from "styled-components"
import { theme } from "../../../theme/theme"
import { Language } from "./Language"
import { ListTopics } from "./Topics"

interface ICard{
  isArchived: string, 
  name: string, 
  createdAt: string, 
  url: string, 
  lang: any, 
  topics: any
}
const Card = ({ isArchived, name, createdAt, url, lang, topics} : ICard) => {

  const moment = (dt : string) => {
    const date = new Date(dt)
    const __n = (e : number) => (`0${ e }`).slice(-2)
    return `${__n(date.getDate())}/${__n(date.getMonth() + 1)}/${date.getFullYear()}` 
  }
  return <BoxCard>
    <Ativo className={!isArchived ? 'ativo' : 'inativo'}>
      {!isArchived ? 'ativo' : 'inativo'}
    </Ativo>
    {/* <img src={openGraphImageUrl} /> */}
    <h2>{name}</h2>
    <div>{moment(createdAt)}</div>
    <a href={url} target="_blank" rel="noreferrer">Link repositorio</a>

    <Language lang={lang} />
    
    <ListTopics topics={topics} />
  </BoxCard>
}

const BoxCard = styled.div`
  display:block;
  height: 100%;
  color:${theme.color.black700};
  background:${theme.color.white};  
  padding:40px 25px 35px;
  border-radius:5px;
  position: relative;
  max-width:450px;
  width:100%;
  overflow: hidden;
  
  h2{
    line-height: 140%;
  }
`
const Ativo = styled.div`
  position: absolute;
  top:0px;
  right:25px;
  padding:5px 10px;
  color:${theme.color.white};
  font-size:1.2rem;
  
  &.ativo{
    background:${theme.color.prim800};
  }
  &.inativo{
    background:${theme.color.black800};
  }
`

export { Card }