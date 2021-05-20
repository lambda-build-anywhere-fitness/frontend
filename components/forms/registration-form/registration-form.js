import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

// ==============================================
// ==============================================

const init_form = { email: '', password: '' };

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
  padding: 2%;
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
`; // FormRow ``

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
`; // Button ``

// ==============================================
// ==============================================

const Solid = styled.span`
`; // Solid ``
const Translucent = styled.span`
  color: var(--translucent-primary);
`; // Translucent ``
  
// ==============================================
// ==============================================

const RegistrationForm = () => {

  // --------------------------------------------

  const [form, setForm] = useState(init_form);

  // --------------------------------------------

  const onChange = (event) => {
    console.log('onChange() -- form: ', form);
    const { name, value } = event.target;
    setForm( {...form, [name]: value} );
  };

  // --------------------------------------------

  return (
    <FormContainer>
      <Form onSubmit={e => e.preventDefault()}>
        <FormRow>
          <div className="top">
            <h3>CREATE YOUR APP ACCOUNT</h3>
          </div>
          <div className="bottom">
            <Solid>1</Solid> <Solid>&#8212;</Solid> <Translucent>2</Translucent> <Translucent>&#8212;</Translucent> <Translucent>3</Translucent>
          </div>
        </FormRow>
        <FormRow>
          <h4>New to the app? Let's create your login!</h4>
        </FormRow>
        <FormRow>
          <div className="top form-input">
            <TextField id="standard-basic" label="email"
              name="email" 
              value={form.email} 
              onChange={onChange}   
            />
          </div>
          <div className="bottom form-input">
            <TextField id="standard-basic" label="password"
              name="password" 
              value={form.password} 
              onChange={onChange}   
            />
          </div>
        </FormRow>
        <FormRow>
          {/* Can display form error messages here */}
        </FormRow>
        <FormRow>
          <Link to="/registration-page-2">
            <Button>NEXT</Button>
          </Link>
        </FormRow>
      </Form>
    </FormContainer>
  );
}
export default RegistrationForm;