import React, {useState, useRef} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import gsap from 'gsap';

// ==============================================
// ==============================================

const buttonStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

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
  root: { position: 'absolue',
    // left: '-100vw',
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
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  /* border: dotted purple 5px; */

  .top, .bottom {
    text-align: center;
    /* border: solid white 2px; */

    &.form-input { position: relative;
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

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const titleRef = useRef(null);

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
      // const progress_bar = document.querySelector('#registrationFormPg1__LinearProgress');
      // progress_bar.classList.toggle('hide-visibility');

      const duration = 0.3;
      gsap.to([input1Ref.current, input2Ref.current], {
        x: '100vw', 
        delay: 0, 
        ease: "power2.out",
        stagger: 0.15,
      });
      setTimeout(() => history.push("/registration-page-2"), duration * 1e3);

      // animate:  "New to the app? Let's create your login!"
      gsap.to(titleRef.current, { opacity: 0 });
    })();

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
          <h4 ref={titleRef}>New to the app? Let's create your login!</h4>
        </FormRow>
        <FormRow>
          <div className="top form-input">
            <TextField id="standard-basic" label="email"
              name="email" 
              value={form.email} 
              onChange={onChange}
              className={inputClasses.root}
              ref={input1Ref}
            />
          </div>
          <div className="bottom form-input">
            <TextField id="standard-basic" label="password"
              name="password" 
              value={form.password} 
              onChange={onChange}
              className={inputClasses.root}
              ref={input2Ref}
            />
          </div>
        </FormRow>
        <FormRow>
          {/* Can display form error messages here */}
        </FormRow>
        <FormRow>
          
          <Button type="submit" className={buttonClasses.root}>
            NEXT
          </Button>

          <LinearProgress className="hide-visibility" id="registrationFormPg1__LinearProgress"></LinearProgress>
        
        </FormRow>
      </Form>
    </FormContainer>
  );
}
export default RegistrationFormPg1;