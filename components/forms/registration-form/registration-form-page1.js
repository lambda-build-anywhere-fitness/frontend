import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// ==============================================
// ==============================================

const buttonStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 'dashed white 5px',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

    height: '60px',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    color: 'var(--text-primary)',
    background: 'var(--translucent-primary)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': { 
      boxShadow: 'var(--hover-shadow)',
      transform: 'scaleX(1.01) scaleY(1.01)'
    }
  },
}));

const inputStyles = makeStyles({
  root: {
    width: '100%',
  '& *': {
    color: 'white'
  },
  '& .MuiInput-underline::before': {
    borderBottom: '2px solid var(--translucent-primary)',
  },
  },
});

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
      width: 100%;
      text-align: left;
      padding: 0 2%;
      border: 0;
      /* border: dashed yellow 1px; */
    }
  }
`; // FormRow ``

// ==============================================
// ==============================================

const Solid = styled.span`
`; // Solid ``
const Translucent = styled.span`
  color: var(--translucent-primary);
`; // Translucent ``
  
// ==============================================
// ==============================================

const RegistrationFormPg1 = ({setFormData}) => {

  // --------------------------------------------

  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();

  // --------------------------------------------
  const init_form = { email: '', password: '' };
  const [form, setForm] = useState(init_form);

  // --------------------------------------------

  const onChange = (event) => {
    console.log('onChange() -- form: ', form);
    const { name, value } = event.target;
    setForm( {...form, [name]: value} );
  };
  
  // --------------------------------------------

  const history = useHistory();
  const onPost = (event) => {
    console.log('onPost() in registration-form component');
    event.preventDefault();

    const formData = {
      "email": `${form.email}`,
      "password": `${form.password}`,
    };
    setFormData(formData);

    const animate_page_transition_during_post_request = (() => {
      const duration = 0.5;
      // gsap.to(inputRef.current, {opacity: 0, duration});
      setTimeout(() => history.push("/registration-page-2"), duration * 1e3);
    })();


    // axios.post('http://localhost:5000/friends', user)
    //   .then((response) => {
    //     console.log(response.data);
    //     setUsers(response.data);
    //   });

    // Orlando TODO: Make POST request to backend here
    // Orlando TODO: Make POST request to backend here
    // Orlando TODO: Make POST request to backend here
    // Orlando TODO: Make POST request to backend here
    // Orlando TODO: Make POST request to backend here
  };

  // --------------------------------------------

  return (
    <FormContainer>
      <Form onSubmit={onPost}>
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
              className={inputClasses.root}   
            />
          </div>
          <div className="bottom form-input">
            <TextField id="standard-basic" label="password"
              name="password" 
              value={form.password} 
              onChange={onChange}
              className={inputClasses.root}
            />
          </div>
        </FormRow>
        <FormRow>
          {/* Can display form error messages here */}
        </FormRow>
        <FormRow>
          {/* <Link to="/registration-page-2" style={{textDecoration: 'none'}}> */}
            <Button type="submit" className={buttonClasses.root}>NEXT</Button>
          {/* </Link> */}
        </FormRow>
      </Form>
    </FormContainer>
  );
}
export default RegistrationFormPg1;