import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

// ==============================================
// ==============================================

const buttonStyles = makeStyles((theme) => ({
  root: {
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
  root: {
  '& *': { color: 'var(--text-primary) !important' },
  '& .MuiInput-underline::before': {
    borderBottom: '2px solid var(--translucent-primary)',
  },
  '&.MuiFormLabel-root': {color: 'white'}
  },
});

// ==============================================
// ==============================================

const RegistrationPage = () => {

  // --------------------------------------------

  const [text_value_1, setTextValue1] = useState('');
  const [text_value_2, setTextValue2] = useState('');
  const [text_value_3, setTextValue3] = useState('');
  const [text_value_4, setTextValue4] = useState('');
  const [radio_value,  setRadioValue] = useState('client');
  
  const handleTextChange1 = e => setTextValue1(e.target.value);
  const handleTextChange2 = e => setTextValue2(e.target.value);
  const handleTextChange3 = e => setTextValue3(e.target.value);
  const handleTextChange4 = e => setTextValue4(e.target.value);
  const handleRadioChange = e => setRadioValue(e.target.value);
  
  // --------------------------------------------

  const init_form = {name: '', email: '', username: '', password: '', role: 'client'};
  const [form_values, setFormValues] = useState(init_form);

  useEffect(() => {
    setFormValues({
      name:     text_value_1,
      username: text_value_2,
      email:    text_value_3, 
      password: text_value_4, 
      role:     radio_value
    });

    console.log('form values: ', form_values);

  }, [text_value_1, text_value_2, text_value_3, text_value_4, radio_value]);

  // --------------------------------------------

  const history = useHistory();
  const onPost = (event) => {
    console.log('onPost() in registration-form component');
    event.preventDefault();

    const formData = {
      "name":      form_values.name,
      "email":     form_values.email,
      "username":  form_values.username,
      "password":  form_values.password,
      "user-type": form_values.role,
    };

    const progress_bar = document.querySelector('#registration__LinearProgress');
    progress_bar.classList.toggle('hide-visibility');

    axios.post('https://anywhere-fitness-ptbw.herokuapp.com/api/auth/register', formData)
         .then(res => {
           console.log('response: ', res);
           history.push('/login')
          })
         .catch(err => console.log(err));
    setFormValues(init_form);
  };

  // --------------------------------------------

  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();

  // --------------------------------------------

  return (
    <form onSubmit={onPost} style={{display: 'grid', placeItems: 'center', height: '100vh', width: '100vw', background: 'linear-gradient(90deg, var(--gradient-starting), var(--gradient-ending))'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems: 'center', height: '80%', width: '70vw', maxWidth: '500px'}}>
        <FormControl style={{width: '100%'}}>
          <TextField name="name"     label="name"     onChange={handleTextChange1} className={inputClasses.root}/>
          <TextField name="username" label="username" onChange={handleTextChange2} className={inputClasses.root}/>
          <TextField name="email"    label="email"    onChange={handleTextChange3} className={inputClasses.root}/>
          <TextField name="password" label="password" onChange={handleTextChange4} className={inputClasses.root}/>
        </FormControl>

        <FormControl component="fieldset" style={{width: '100%'}}>
          <FormLabel component="legend" className={inputClasses.root}>Role</FormLabel>
          <RadioGroup aria-label="role" name="role" value={radio_value} onChange={handleRadioChange}>
            <FormControlLabel value="client"     control={<Radio />} label="Client"     className={inputClasses.root}/>
            <FormControlLabel value="instructor" control={<Radio />} label="Instructor" className={inputClasses.root}/>

            {radio_value == 'instructor' ? 
              <TextField name="auth-code" label="Auth Code" className={inputClasses.root} /> :
              <TextField name="auth-code" label="Auth Code" className={inputClasses.root} style={{visibility: 'hidden'}}/>
            }
            
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit" onSubmit={onPost} className={buttonClasses.root}>
          SUBMIT
        </Button>

        <LinearProgress className="hide-visibility" id="registration__LinearProgress"></LinearProgress>
      </div>
    </form>
  );
};

export default RegistrationPage;