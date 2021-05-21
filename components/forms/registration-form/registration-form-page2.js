import React, {useState, useEffect, useRef} from 'react';
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
  grid-template-rows: 1fr 2fr 1fr 1fr;
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

  .top, .middle, .bottom {
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

  useEffect(() => {
    
    // animate:  "2 -"
    const timeline = gsap.timeline();
    timeline.to([translucent1Ref.current, translucent2Ref.current], { 
      color: 'white',
      textShadow: '1px 1px 2px white, 0 0 1em green, 0 0 0.2em white',
      scale: 2.1,
      duration: 0.3
    });
    timeline.to([translucent1Ref.current, translucent2Ref.current], { 
      color: 'white',
      textShadow: '0px 0px 0px white, 0 0 0em green, 0 0 0em white',
      scale: 2.1,
      duration: 0.3,
    });

    timeline.from([input1Ref.current, input2Ref.current, input3Ref.current], {
      x: '-100vw', 
      ease: "power2.out",
      stagger: 0.15
    });

  }, []);

  // --------------------------------------------

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const translucent1Ref = useRef(null);
  const translucent2Ref = useRef(null);

  // --------------------------------------------

  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();

  // --------------------------------------------
  const init_form = { first_name: '', last_name: '', country: '', mailing_list: false };
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
      "first_name": `${form.first_name}`,
      "last_name": `${form.last_name}`,
      "country": `${form.country}`,
    };
    setFormData(formData);

    const animate_page_transition_during_post_request = (() => {
      const progress_bar = document.querySelector('#registrationFormPg1__LinearProgress');
      progress_bar.classList.toggle('hide-visibility');

      const duration = 2.5;
      gsap.to([input1Ref.current, input2Ref.current, input3Ref.current], {
        x: '100vw', 
        delay: duration - 0.5, 
        ease: "power2.out",
        stagger: 0.15,
      });
      setTimeout(() => history.push("/registration-page-3"), duration * 1e3);

    })();

    // axios.post('http://localhost:5000/x', user)
    //   .then((response) => {
    //     console.log(response.data);
    //     setUsers(response.data);
    //   });
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
            <Solid>1</Solid> <Solid>&#8212;</Solid> <Translucent ref={translucent1Ref}>2</Translucent> <Translucent ref={translucent2Ref}>&#8212;</Translucent> <Translucent>3</Translucent>
          </div>
        </FormRow>

        <FormRow>
          <div className="top form-input">
            <TextField id="standard-basic" label="first name"
              name="first_name" 
              value={form.first_name} 
              onChange={onChange}
              className={inputClasses.root}
              ref={input1Ref}
            />
          </div>
          <div className="middle form-input">
            <TextField id="standard-basic" label="last name"
              name="last_name" 
              value={form.last_name} 
              onChange={onChange}
              className={inputClasses.root}
              ref={input2Ref}
            />
          </div>
          <div className="bottom form-input">
            <TextField id="standard-basic" label="country"
              name="country" 
              value={form.country} 
              onChange={onChange}
              className={inputClasses.root}
              ref={input3Ref}
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