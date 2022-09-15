import { useRef, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme/theme"

interface IBar {
  ord: boolean,
  handleFilterCancel: () => void,
  handleArchived: any,
  setOrd: any,
  handleSearch: any
}

const Bar = ({ handleFilterCancel, handleArchived, setOrd, ord, handleSearch }: IBar) => {
  const [filter, setFilter] = useState(false)
  const inputSearch = useRef<HTMLInputElement>(null)

  const handleSearchInt = (e = '') => {
    const value = inputSearch.current?.value
    if (e === 'Enter') {
      handleSearch(value?.toLocaleLowerCase())
    }
  }
  const handleFilterCancelInt = () => {
    //@ts-ignore
    inputSearch.current.value = ""
    handleFilterCancel()
  }

  return <>
    <H3 onClick={() => setFilter(!filter)}><span>{!filter ? 'Abrir' : 'Fechar'} filtros</span></H3>
    {filter && <BoxBar>
      <div>
        Repositórios:
        <BoxButtons>
          <button className="start" onClick={handleFilterCancelInt}>Todos</button>
          <button onClick={() => handleArchived(false)}>Ativas</button>
          <button className="end" onClick={() => handleArchived(true)}>Arquivados</button>
        </BoxButtons>
      </div>
      <div>
        Odenar:
        <Button onClick={() => {
          setOrd(!ord)
          handleFilterCancelInt()
        }}>{ord ? 'DESC' : 'ASC'}</Button>
      </div>
      <div>
        Stack
        <Input
          type="text"
          ref={inputSearch}
          onKeyDown={(e: any) => handleSearchInt(e.key)} />
      </div>
      <Button className="reset" onClick={handleFilterCancelInt}>Limpar filtro</Button>
    </BoxBar>}
  </>
}

const H3 = styled.h3`
  cursor: pointer;
  font-weight:500;
  text-align: center;
  padding:15px 10px;
  position: relative;

  span{
    display:inline-flex;
    padding:0 15px;
    background:${theme.color.black700};
  }

  &:after{
    content:'';
    position: absolute;
    inset: 0;
    top:50%;
    transform: translateY(-50%);
    height:1px;
    background-color: ${theme.color.white};
    z-index:-1;
  }
`
const border = 10
const BoxButtons = styled.div`
  display: flex;
  gap:1px;

  & > button{
    padding:8px 15px;    
    border-radius: 0px;
    border:0;
    background:${theme.color.prim800};
    color:${theme.color.white};

    &.start{
      border-radius:${border}px 0 0 ${border}px;
    }
    &.end{
      border-radius:0 ${border}px ${border}px 0;
    }
  }  
`

const BoxBar = styled.div`
  color:${theme.color.black800};
  background:${theme.color.white};
  border-radius: 10px;
  padding:15px 15px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap:20px;

  & > div{
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:10px;
  }

  @media(max-width:1000px){
    justify-content: center;
  }
`
const Button = styled.button`
  border:0px;
  padding:8px 14px;
  color:${theme.color.white};
  background:${theme.color.prim800};
  border-radius:5px;

  &.reset{
    background: ${theme.color.black800};
  }
`

const Input = styled.input`
  width: 160px;
  border:0px;
  border-bottom:1px solid ${theme.color.black800};
  font-size:1.8rem;
  padding:5px;

  &:focus{
    outline: none;
  }
`
export { Bar }