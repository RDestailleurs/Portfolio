import React from "react";
import styled from 'styled-components';

const Header : React.FC = () => {
    return (
        <>
        <StyledHeader>
            <StyledButton>
                Accueil
            </StyledButton>
            <StyledButton>
                2020
            </StyledButton>
            <StyledButton>
                2021
            </StyledButton>
            <StyledButton>
                2022
            </StyledButton>
            <StyledButton>
                2023
            </StyledButton>
            <StyledButton>
                2024
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
export default Header;