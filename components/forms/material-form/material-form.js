import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      border: 'dashed green 5px',
    },
  },
}));

const init_form = {
  name: '',                // text
};

export default function BasicTextFields() {

  const [form, setForm] = useState(init_form);

  const onChange = (event) => {
    console.log('onChange() -- form: ', form);
    const { name, value } = event.target;
    setForm( {...form, [name]: value} );
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" 
      onSubmit={(e) => {
        e.preventDefault();
    }}>
      <TextField id="standard-basic" label="Standard"
        name="name" 
        value={form.name} 
        onChange={onChange}   
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button variant="contained" type="submit">Default</Button>
    </form>
  );
}