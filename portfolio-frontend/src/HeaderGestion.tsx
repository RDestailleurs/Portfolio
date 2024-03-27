import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderGestion : React.FC = () => {
    const navigate = useNavigate();
    const handleBack =() => {
        navigate("/", { replace: true });
      }
    const handleProfil =() => {
        navigate("/Gestion", { replace: true });
      }
    const handlePages =() => {
        navigate("/GestionPage", { replace: true });
      }
    return (
        <>
        <StyledHeader>
            <StyledButton onClick={handleBack}>
                Accueil
            </StyledButton>
            <StyledButton onClick={handleProfil}>
                Profil
            </StyledButton>
            <StyledButton onClick={handlePages}>
                Pages
            </StyledButton>
            <StyledButton>
                Oeuvres et Commentaires
            </StyledButton>
        </StyledHeader>
        </>
    )
}
const StyledHeader = styled.header `
    background-color : #0984e3;

`
const StyledButton = styled.button `
    border : 0.1rem solid black;
    background-color : #74b9ff !important;
`
export default HeaderGestion;