import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';
import Header from "./HeaderGestion";

const Gestion : React.FC = () => {
  const validateSchema = Yup.object().shape({ search: Yup.string() });

  const formik = useFormik({
      initialValues: {
      title: "",
      image: '',
      },
  validationSchema: validateSchema,

  onSubmit: (values, { resetForm }) => {
          setTimeout(() => {
              resetForm();
          }, 2000);
      },
  });

  return (
    <>
      <Header/>
      <StyledInterface className="Gestion">
        <StyledPreview className="Preview">
          <title>{formik.values.title}</title>
          <img src = ""/>
        </StyledPreview>
        <StyledForm>
          
            <StyledDiv className="Div1">
              <h3>Nom et Prénom</h3>
              <StyledInput 
                name = "title"
                value = {formik.values.title}
                onChange={formik.handleChange}
                type="text"
              />
            </StyledDiv>
            <StyledDiv className="Div2">
              <h3> Texte de gauche</h3>
              <StyledInput type = "text"></StyledInput>
            </StyledDiv>
            <StyledDiv className="Div3">
              <h3> Image</h3>
              <StyledInput type = "file"></StyledInput>
            </StyledDiv>
            <StyledDiv className="Div4">
              <h3> Texte de droite</h3>
              <StyledInput type = "text"></StyledInput>
            </StyledDiv>


          {/* <StyledSubmit value="button">Submit</StyledSubmit> */}
        </StyledForm>
      </StyledInterface>
    </>
  )
}
const StyledInterface = styled.div `
  display: flex;
  background-color: #fab1a0;
  width: 65rem;
  height: 40rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  padding: 1rem;
`
const StyledPreview = styled.div `
  border: 0.15rem solid black;
  height: 20rem;
  background-color : white;
`
const StyledForm = styled.form `
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  div1 { grid-area: 1 / 2 / 2 / 3;}
  div2 { grid-area: 1 / 1 / 3 / 2;}
  div3 { grid-area: 2 / 2 / 3 / 3;}
  div4 { grid-area: 1 / 3 / 3 / 4;}
  
`
const StyledDiv = styled.div `
  
  `
const StyledInput = styled.input `
`

const StyledSubmit=styled.button``
export default Gestion;