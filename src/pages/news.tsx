import { useState } from 'react'
import axios from "axios"
import { useQuery } from "react-query"
import styled from "styled-components"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { theme } from "../theme/theme"
import { ContainerBox } from "./sobre"

// import * as ImgDefault from './default.png'

// { subject } : {subject?: string }
const fetchNews = async ({ subject } : {subject: string}) => {

  const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${subject}&language=pt&apiKey=${process.env.REACT_APP_NEWSAPI}`); //"https://pokeapi.co/api/v2/pokemon/?limit=50"
  // const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${process.env.REACT_APP_NEWSAPI}`)
  return data;
 };

 interface ArticlesProps{
    author:string,
    content: string,
    description: string,
    source: {id: number | null,  name: string },
    title: string,
    url:string,
    urlToImage:string
 }
 interface NewsProps{
  status: string,
  totalResults: number,
  articles:ArticlesProps[]
 }

export const News = () => {
  const category : string[] = ['games', 'economy', 'technology', 'ecology', 'all']
  const [subject, setSubject] = useState<string>(category[0])

  const { data, status, isLoading } = useQuery<NewsProps>(
    ['news', subject], 
    () => fetchNews({ subject }), 
    { 
      cacheTime: (1000 * 60) * 60 * 24,
      staleTime: (1000 * 60) * 15,
    }
  )


  console.log(data, status)
  return isLoading ? <>Loading...</> : <div>
    <Header menuActive="news" />
    <ContainerBox>
      Consumir dados de api e colocar em cache com react-query [cache: 24h - stale: 15min]

      <CategoryBox>
        {category.map((i, idx) => {
          return <a key={idx} onClick={() => setSubject(i)} className={subject === i ? 'active' : ''}>{i}</a>
        })}
      </CategoryBox>
      
      <ContCards>
      {data?.articles.map((i : ArticlesProps, idx : number) => {
        return <Card key={idx}>
          <img src={i.urlToImage ? i.urlToImage : 'default.png'} alt={i.title} />
          <div className="desc">

            <h3>{i.title}</h3>
            <div dangerouslySetInnerHTML={{__html: `${i.description}` }}></div>
            {i.author && <small>{i.author}</small>}
            <a href={i.url} target="_blank">Veja mais</a>
          </div>
        </Card>
      })}
      </ContCards>
    </ContainerBox>
    <Footer />
  </div>
}
const ContCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap:40px;
`

const Card = styled.div`
  display:flex;
  flex-direction: column;
  width:270px;
  font-size:1.6rem;

  .desc{
    line-height:140%;
    padding:20px 10px;
  }
  img{
    object-fit: cover;
    height:180px;
    border-radius:10px;
  }
  h3{
    font-size:2.2rem;
    line-height:140%;
    padding:0 0 10px;
    color:${theme.color.prim800};
  }
  small{
    font-size:1.2rem;
    display: inline-flex;
    padding:3px 10px;
    margin:10px 0 0;
    background:${theme.color.black800}
  }
  a{
    margin:10px 0 0;
    display: flex;
    color:${theme.color.prim800}
  }
`

const CategoryBox = styled.div`
  border-radius: 10px;
  background: ${theme.color.black800};
  padding:10px 15px;
  margin:20px 0 40px;

  a{
    cursor:pointer;
    color:${theme.color.black600};

    &:hover,
    &.active{
      color:${theme.color.prim800}
    }
  }
`