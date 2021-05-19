import React from 'react';
import styled from 'styled-components';

// ==============================================
// ==============================================

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, var(--gradient-starting), var(--gradient-ending));
  color: var(--text-primary);
`; // FormContainer ``

// ==============================================
// ==============================================

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;  
  grid-template-rows: repeat(5, 1fr);
  height: 700px;
  width: 400px;
  /* border: dashed green 5px; */
`; // Form ``

// ==============================================
// ==============================================

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  /* border: dotted purple 5px; */

  .top, .bottom {
    text-align: center;
    /* border: solid white 2px; */

    &.form-input {
      text-align: left;
      padding: 0 2%;
      border: 0;
      border-bottom: solid var(--translucent-primary) 2px;
    }
  }
`;

// ==============================================
// ==============================================

const Button = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: var(--text-primary);
  background: var(--translucent-primary);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover { 
    box-shadow: var(--hover-shadow);
    transform: scaleX(1.01) scaleY(1.01);
  }
`;

// ==============================================
// ==============================================

// ==============================================
// ==============================================

const Solid = styled.span`
`;
const Translucent = styled.span`
  color: var(--translucent-primary);
`;
const RegistrationForm = () => {
  return (
    <FormContainer>
      <Form>
        <FormRow>
          <div className="top">
            <h4>CREATE YOUR APP ACCOUNT</h4>
          </div>
          <div className="bottom">
            <Solid>1</Solid> <Solid>&#8212;</Solid> <Translucent>2</Translucent> <Translucent>&#8212;</Translucent> <Translucent>3</Translucent>
          </div>
        </FormRow>
        <FormRow>
          <h3>New to the app? Let's create your login!</h3>
        </FormRow>
        <FormRow>
          <div className="top form-input">
            email
            {/* TODO: Place a text input field for email here */}
          </div>
          <div className="bottom form-input">
            password
            {/* TODO: Place a text input field for password here */}
          </div>
        </FormRow>
        <FormRow>
          {/* Can display form error messages here */}
        </FormRow>
        <FormRow>
          <Button>NEXT</Button>
        </FormRow>
      </Form>
    </FormContainer>
  );
}
export default RegistrationForm;