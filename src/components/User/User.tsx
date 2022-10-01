import { useQuery, gql } from '@apollo/client';
import { LoadError } from '../LoadError/LoadError';
import { IUser } from './types';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { useState } from 'react';
import { GitHubIcon, TwitterIcon, WwwIcon } from '../svg/Icons';

const GET_USER = gql`
query User($login: String = "venturimdias"){
  user(login: $login) {
    id
    name
    email
    avatarUrl
    bio
    url
    twitterUsername
		websiteUrl
  }
}
`

const User = ({ perfil }: { perfil?: string }) => {
  const { loading, error, data } = useQuery<IUser>(GET_USER, {
    variables: {
      login: perfil
    }
  });
  const user = data?.user
  const [userBox, setUserBox] = useState(false)

  return <>
    {user?.avatarUrl &&  <Image src={user?.avatarUrl}
      onMouseUp={() => setUserBox(!userBox)} 
      title="Informações do usuário" 
      alt="imagem usuário"
      />}
    {userBox && <BoxUser>
      <LoadError loading={loading} error={error} />
      {user?.avatarUrl && <img src={user?.avatarUrl} alt={"foto "+ user?.name} />}
      <Desc>
        <h4>{user?.name}</h4>
        <h5>{user?.bio}</h5>

        <div className='links'>
          {user?.url && <a href={user?.url} target="_blank" rel="noreferrer"><GitHubIcon /></a>}
          {user?.twitterUsername && <a href={user?.twitterUsername} target="_blank" rel="noreferrer"><TwitterIcon /></a>}
          {user?.websiteUrl && <a href={user?.websiteUrl} target="_blank" rel="noreferrer"><WwwIcon /></a>}
        </div>
      </Desc>
    </BoxUser>
    }
  </>
}

const Image = styled.img`
  cursor:pointer;
  display:flex;
  border-radius:50%;
  width:60px;
  height:60px;
  margin-left:auto;
`
const BoxUser = styled.div`
  position:absolute;
  top:80px;
  right:20px;
  z-index:100;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:20px;
  max-width:380px;
  width: 420px;
  margin:10px auto 20px;
  border-radius:10px;
  color:${theme.color.black700};
  background:${theme.color.white};
  border-bottom:10px solid ${theme.color.prim800};
  padding:40px 20px 20px;
  gap:20px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05), 0px 2px 1px rgba(0, 0, 0, 0.25), inset 0px 2px 0px #FFFFFF;

  &:after{
    content:'';
    background:${theme.color.white};
    position:absolute;
    width:20px;
    height:20px;
    top:-5px;
    right:20px;
    transform: rotate(45deg);
  }

  & > img{
    width:150px;
    height:150px;
    border-radius: 50%;
    margin:auto;
  } 

  .links{
    padding:20px 0 0 0;
    display:flex;
    justify-content: center;
    gap:10px;
    a {
      display:flex;
    }
    svg{
      width:46px;
      height:46px;
    }
  }

  @media(max-width:768px){
    right:15px;

    &:after{
      right:25px;
    }
  }
  @media(max-width:420px){
    width:290px;
  }
`
const Desc = styled.div`
  text-align: center;
  font-size:1.8rem;
  font-weight:500;

  h4{
    font-size:3.0rem;
    line-height: 120%;
    color:${theme.color.prim800};
  }
  h5{
    font-size:1.6rem;
    line-height:150%;
    padding:5px 0 10px;
    margin:5px 0;
  }
  a{
    font-weight: 500;
    color:${theme.color.prim800}
  }
`

export { User }