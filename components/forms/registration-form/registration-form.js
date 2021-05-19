import React from 'react';
import styled from 'styled-components';
import '../../../global-styles/styles.scss';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border: solid red 5px;
`; // FormContaienr ``

const Form = styled.form`
  
  height: 100px;
  border: dashed green 5px;
`; // Form ``

const RegistrationForm = () => {
  return (
    <FormContainer>
      <Form>Registration Form</Form>
    </FormContainer>
  );
}
export default RegistrationForm;