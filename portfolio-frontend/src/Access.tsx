import { useNavigate } from 'react-router-dom';
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';

const Access : React.FC = () => {
    const navigate = useNavigate();
    const handleBack =() => {
      navigate("/", { replace: true });
    }
    const handleForward =() => {
      navigate("/Gestion", { replace: true });
    }

    const validateSchema = Yup.object().shape({ search: Yup.string() });

    const formik = useFormik({
      initialValues: {
      compte: '',
      mdp: '',
      },
    validationSchema: validateSchema,

    onSubmit: (values, { resetForm }) => {
          setTimeout(() => {
            console.log(values);
            resetForm();
          }, 2000);
      },
    });
    return (
      <>
        <div>
            <h1>Page de Connexion</h1>
            <StyledForm>
                <h3>Nom de Compte</h3>
                <StyledInput
                    name = "text"
                    value = {formik.values.compte}
                    onChange={formik.handleChange}
                    type="text"
                />
                <h3>Mot de Passe</h3>
                <StyledInput 
                    name = "text"
                    value = {formik.values.mdp}
                    onChange={formik.handleChange}
                    type="text"
                />
            <StyledSubmit onClick={handleBack}>Retour</StyledSubmit>
            <StyledSubmit onClick={handleForward}>Connexion</StyledSubmit>
            </StyledForm>
        </div>
      </>
    )
  }
  const StyledForm = styled.form `
    background-color : beige;
  `
  const StyledInput = styled.input ``

  const StyledSubmit = styled.button ``
  
  export default Access;