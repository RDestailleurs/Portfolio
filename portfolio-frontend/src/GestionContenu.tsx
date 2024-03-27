import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';
import Header from "./HeaderGestion";

const GestionPage : React.FC = () => {
  const validateSchema = Yup.object().shape({ search: Yup.string() });

  const formik = useFormik({
      initialValues: {
      entry1: '',
      entry2: '',
      entry3: '',
      entry4: '',
      entry5: '',
      entry6: '',
      entry7: '',
      entry8: '',
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
      <StyledInterface>
        <StyledPreview>
          
        </StyledPreview>
        <StyledForm>
          <StyledGrid>
          <h3>Entrée 1</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry1}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 2</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry2}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 3</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry3}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 4</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry4}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 5</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry5}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 6</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry6}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 7</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry7}
            onChange={formik.handleChange}
            type="text"
          />
          <h3>Entrée 8</h3>
          <StyledInput 
            name = "text"
            value = {formik.values.entry8}
            onChange={formik.handleChange}
            type="text"
          />
          </StyledGrid>
          <StyledSubmit value="button">Submit</StyledSubmit>
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
  height: 30rem;
  background-color : white;
`
const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const StyledGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(8, 2fr);
  align-items: center;
`
const StyledInput = styled.input ``

const StyledSubmit=styled.button``
export default GestionPage;