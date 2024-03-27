import './Accueil.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Accueil : React.FC = () => {
  const navigate = useNavigate();
  const handleClickButton =() => {
    navigate("/Access", { replace: true });
  }
  

  const handleForward =() => {
    navigate("/Contenu", { replace: true });
  }
  return (
    <>
      <StyledAccueil>
        <h1>Katy Templier</h1>
        <StyledContent>
          <StyledNav>
            <button className='NavB'>Accueil</button>
            <button className='NavB'>2020</button>
            <button className='NavB'>2021</button>
          </StyledNav>
          <p>Lorem Ipsum</p>
          <StyledImg src = "./droit.png"onClick= {handleClickButton}/>
          <p>Lorem Ipsum</p>
          <input type="image" src="./public/droit.png" onClick={handleForward}/>
        </StyledContent>
        
      </StyledAccueil>
    </>
  )
}
const StyledAccueil = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StyledContent = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr) !important;
  justify-items: center;
  align-items: center;
  max-width: 100rem;
  height: 45rem;
  background-color: #fab1a0;
`
const StyledNav = styled.nav `
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-color: #00b894;
`
const StyledImg = styled.img `
  background-color: #00b894;
  height: 15rem;
  width: 15rem;
`
const StyledButton = styled.button `
  background-color : #e17055 !important;
  height: 3rem;
  width: 4rem;
`

export default Accueil;
