import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Contenu : React.FC = () => {
  const navigate = useNavigate();
  const handleBack =() => {
    navigate("/", { replace: true });
  }
  const handleForward =() => {
    navigate("/Contenu", { replace: true });
  }
  return (
    <>
      <Header />
      <StyledContenu>
      <input type="image" src="./gauche.png" onClick={handleBack}/>
        <StyledContent>
          <p>Hello</p>
          <p>1</p>
          <img src = ""/>
          <p>3</p>
          <img src = ""/>
          <p>gooday</p>
        </StyledContent>
        <input type="image" src="./droit.png" onClick={handleForward}/>
        
      </StyledContenu>
    </>
  )
}
const StyledContenu = styled.div `
  background-color: rgb(31, 129, 214);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
`
const StyledContent = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  height: 45rem;
  min-width: 80rem;
  max-width: 100rem;
`
styled.body `
  justify-content: center;
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  align-items: stretch;
`
export default Contenu;