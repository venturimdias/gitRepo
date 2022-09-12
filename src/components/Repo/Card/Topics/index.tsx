import styled from "styled-components"
import { theme } from "../../../../theme/theme"

interface ITopics {
  node: {
    url: string,
    topic: {
      name: string
    }
  }
}
const ListTopics = ({ topics }: { topics: ITopics[] }) => {

  return <List>
    {topics.map((t, idx) => (<a href={t.node.url} key={idx}>
      {t.node.topic.name}
    </a>))}
  </List>
}
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:5px;

  & > a{
    border-radius:4px;
    display:flex;
    padding:5px 10px 7px;
    border:1px solid ${theme.color.black700};

    &:hover{
      color:${theme.color.white};
      background:${theme.color.black700};
    }
  }
`


export { ListTopics }