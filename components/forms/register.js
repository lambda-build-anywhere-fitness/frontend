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

// ==============================================
// ==============================================

const RegistrationPage = () => {

  // ============================================

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
  
  // ============================================

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

  // ============================================

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

    // const progress_bar = document.querySelector('#loginFormPg1__LinearProgress');
    // progress_bar.classList.toggle('hide-visibility');

    axios.post('https://anywhere-fitness-ptbw.herokuapp.com/api/auth/register', formData)
         .then(res => {
           console.log('response: ', res);
           history.push('/login')
          })
         .catch(err => console.log(err));
    setFormValues(init_form);
  };

  // ============================================

  return (
    <form onSubmit={onPost} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems: 'center', height: '100vh', width: '100vw', border: 'dashed hotpink 5px'}}>
      <FormControl>
        <TextField name="name"     label="name"     onChange={handleTextChange1}/>
        <TextField name="username" label="username" onChange={handleTextChange2}/>
        <TextField name="email"    label="email"    onChange={handleTextChange3}/>
        <TextField name="password" label="password" onChange={handleTextChange4}/>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Role</FormLabel>
        <RadioGroup aria-label="role" name="role" value={radio_value} onChange={handleRadioChange}>
          <FormControlLabel value="client"     control={<Radio />} label="Client" />
          <FormControlLabel value="instructor" control={<Radio />} label="Instructor" />

          {radio_value == 'instructor' ? 
            <TextField name="auth-code" label="Auth Code" /> :
            <TextField name="auth-code" label="Auth Code" style={{visibility: 'hidden'}}/>
          }
          
        </RadioGroup>
      </FormControl>

      <Button variant="contained" type="submit" onSubmit={onPost}>
        SUBMIT
      </Button>
    </form>
  );
};

export default RegistrationPage;