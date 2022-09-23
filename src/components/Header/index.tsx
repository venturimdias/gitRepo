import { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { perfil } from '../../config';
import { MemoryIcon, MenuIcon } from '../svg/Icons';
import { User } from '../User/User';
import { theme } from '../../theme/theme';

const Header = () => {
  const [active, setActive] = useState(false)

  const closeMenu = () => setActive(false)

  return <>
    <BoxHeader>
      <h1 className='logo'><MemoryIcon /> JVD </h1>

      <MenuPerfil>
        <Menu className={active ? "ativo" : ''}>
          <Link to={"/"} onClick={closeMenu}>home</Link>
          <Link to={"/sobre"} onClick={closeMenu}>sobre</Link>
          <Link to={"/git-repo"} onClick={closeMenu}>git</Link>
        </Menu>

        <MenuMobile onClick={() => setActive(!active)} ><MenuIcon /></MenuMobile>
        
        <User perfil={perfil} />
      </MenuPerfil>
    </BoxHeader>
  </>
}

const BoxHeader = styled.div`
  display:flex;
  position: relative;
  justify-content: space-between;

  .logo{
    display:flex;
    align-items: center;
    gap:10px;
  }   
`

const MenuPerfil = styled.div`
  display:flex;
  padding:20px;
  align-items: center;
  gap: 20px;
  position:relative;
`

const MenuMobile = styled.div`
  display: none;
  padding:5px;

  svg{
    width:24px;
    height:24px;
  }

  @media (max-width:600px) {
    display:flex;  
  }
`  
const Menu = styled.div`
  display:flex;
  justify-content: center;
  gap:10;

  & > a{
    display:flex;
    padding:10px 15px;
  }

  @media(max-width:600px){
    display:${props => props.className == 'ativo' ? "flex": 'none'};
    flex-direction: column;
    position: absolute;
    z-index: 10;
    top:30px;
    left:-100px;
      
    & > a{
      width:120px;
      background:${theme.color.prim800}
    }
  }
`
export { Header } 