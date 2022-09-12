import { useQuery, gql } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/global';
import { LoadError } from '../LoadError/LoadError';
import { Bar } from './Bar';
import { Card } from './Card';
import { IRepo, IRepositories } from './types';

const GET_REPOSITORIES = gql`
query Repositories($direction: OrderDirection = DESC, $login: String = "venturim") {
  user(login: $login) {
    repositories(first: 25, orderBy: {field: CREATED_AT, direction: $direction}) {
      totalCount
      edges {
        node {
          ... on Repository {
            createdAt
            id
            isArchived
            name
            url
            isArchived
            homepageUrl
            openGraphImageUrl
            languages(first: 10, orderBy: {field: SIZE, direction:DESC}) {
              totalCount
              edges {
                node {
                  name
                  color
                }
                size
              }
            }
            repositoryTopics(first: 10) {
              totalCount
              edges {
                node {
                  topic {
                    name
                  }
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`
const Repo = ({ perfil }: { perfil?: string }) => {
  const [ord, setOrd] = useState(false)

  const { loading, error, data } = useQuery<IRepositories>(GET_REPOSITORIES, {
    variables: {
      direction: ord ? 'ASC' : 'DESC',
      login: perfil,
    }
  });
  const listData = data?.user.repositories.edges

  const [list, setList] = useState<IRepo[]>()
  const [filterTopic, setFilterTopic]: any = useState([])

  const listTopics = () => {
    const topics: any = []
    data?.user.repositories.edges.map(i => {
      let items: string[] = []
      i.node.repositoryTopics.edges.map(t => {
        items.push(t.node.topic.name)
      })
      topics.push({
        node: {
          id: i.node.id,
          isArchived: i.node.isArchived,
          createdAt: i.node.createdAt,
          name: i.node.name,
          url: i.node.url,
          openGraphImageUrl: i.node.openGraphImageUrl,
          languages: i.node.languages,
          repositoryTopics: i.node.repositoryTopics,
          topics: items
        }
      })
      setFilterTopic(topics)
    })
  }

  useEffect(() => {
    setList(listData)
    listTopics()
  }, [data])

  const handleArchived = (value: boolean) => {
    const listFilter: any = []
    filterTopic.filter((i: any) => i.node.isArchived === value && listFilter.push(i))
    setList(listFilter)
  }

  const handleSearch = (value: string) => {
    handleFilterTopics(value)
  }
  const handleFilterTopics = (value: any) => {
    const listFilter: any = []
    filterTopic.filter((i: any) => {
      const topic = i.node.topics
      topic.includes(value) && listFilter.push(i)
    })
    setList(listFilter)
  }

  const handleFilterCancel = () => {
    setList(listData)
  }

  return <Container>
    <Bar
      handleFilterCancel={handleFilterCancel}
      handleArchived={handleArchived}
      setOrd={setOrd}
      ord={ord}
      handleSearch={handleSearch}
    />

    <LoadError loading={loading} error={error} />
    <BoxGrid>
      {list && list?.map((repo) => {
        const { node: { createdAt, id, isArchived, name, url, openGraphImageUrl, languages, repositoryTopics } } = repo
        const lang = languages.edges
        const topics = repositoryTopics.edges

        return <div key={id}>
          <Card
            isArchived={isArchived}
            name={name}
            createdAt={createdAt}
            url={url}
            lang={lang}
            topics={topics}
          />
        </div>
      })}
    </BoxGrid>
  </Container>
}

const BoxGrid = styled.div`
  padding:40px 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;

  @media(max-width:768px){
    grid-template-columns: 1fr;
    max-width:450px;
    width:100%;
    margin:auto;
  }
`
export { Repo } 