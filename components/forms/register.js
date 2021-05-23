import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// ==============================================
// ==============================================

const RegistrationPage = () => {

  // ============================================

  const [text_value_1, setTextValue1] = useState('');
  const [text_value_2, setTextValue2] = useState('');
  const [radio_value,  setRadioValue] = useState('client');
  
  const handleTextChange1 = e => setTextValue1(e.target.value);
  const handleTextChange2 = e => setTextValue2(e.target.value);
  const handleRadioChange = e => setRadioValue(e.target.value);
  
  // ============================================

  const [form_values, setFormValues] = useState({email: '', password: '', user_type: ''});

  useEffect(() => {
    setFormValues({
      email: text_value_1, 
      password: text_value_2, 
      user_type: radio_value
    });

    console.log('form values: ', form_values);

  }, [radio_value, text_value_1, text_value_2]);

  // ============================================

  return (
    <form>
      <TextField name="email"    label="email"    onChange={handleTextChange1}/>
      <TextField name="password" label="password" onChange={handleTextChange2}/>

      <FormControl component="fieldset">
        <FormLabel component="legend">User Type</FormLabel>
        <RadioGroup aria-label="user-type" name="user-type" value={radio_value} onChange={handleRadioChange}>
          <FormControlLabel value="client"     control={<Radio />} label="Client" />
          <FormControlLabel value="instructor" control={<Radio />} label="Instructor" />

          {radio_value == 'instructor' ? 
            <TextField name="auth-code" label="Auth Code" />
            :
            null
          }
          
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default RegistrationPage;