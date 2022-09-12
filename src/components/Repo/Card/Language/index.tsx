import styled from "styled-components"

interface ILang {
  node: {
    color: string,
    name: string,
  },
  size: string
}
const Language = ({ lang }: { lang: ILang[] }) => {

  const percent = (value: any) => {
    const values = lang.map(i => i.size)
    const total = values.reduce((prev, current) => prev + current)
    //@ts-ignore
    const result = (value * 100 / total)
    return {
      valueRoud: `${Math.round(result)}%`,
      value: `${result}%`
    }
  }
  return <>
    <List>
      {lang.map((l, idx) => <div key={idx} >
        <div style={{ background: l.node.color }} ></div>
        {l.node.name} - {percent(l.size).valueRoud}
      </div>)}
    </List>

    <BarraBotton>
      {lang.map((l, idx) => <div key={idx}
        style={{ background: l.node.color, width: percent(l.size).value }}>
      </div>)}
    </BarraBotton>
  </>
}

const List = styled.div`
  padding:15px 0;

  & > div {
    padding: 3px 0;

    & > div{
      display: inline-flex;
      height:10px;
      width:10px;
      margin:3px 10px 0 0;
    }
  }

`
const BarraBotton = styled.div`
  position:absolute;
  display:flex;
  width:100%;
  left:0;
  bottom:0;
  height:15px;
`
export { Language }