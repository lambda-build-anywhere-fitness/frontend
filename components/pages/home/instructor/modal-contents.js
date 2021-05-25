import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slider from '@material-ui/core/Slider';

import { makeStyles } from '@material-ui/core/styles';

// ==============================================

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'lightgray',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// ==============================================

export default function ModalContents() {
  const classes = useStyles();

  // (0) name,                SHOULD BE REMOVED
  // (1) instructor_name,     Text Input Field
  // (2) duration,            Slider
  // (3) type,                Dropdown
  // (4) intensity,           Dropdown
  // (5) location,            Dropdown
  // (6) max_size,            Slider
  // (7) date,                Calendar              (Start Time)
  // (8) signedUp             ??????

  const [input_val_1, setInputVal1] = useState(0);  // [input-field: Integer]    Class ID
  const [input_val_2, setInputVal2] = useState(0);  // [slider:      Integer]    Class Duration
  const [input_val_3, setInputVal3] = useState(''); // [dropdown:    String]     Class Type
  const [input_val_4, setInputVal4] = useState(''); // [dropdown:    String]     Class Location
  const [input_val_5, setInputVal5] = useState(''); // [dropdown:    String]     Class Intensity
  const handleInputVal1 = (e)         => { console.log('input_val_1: ', input_val_1); setInputVal1(e.target.value); }
  const handleInputVal2 = (e, newVal) => { console.log('input_val_2: ', input_val_2); setInputVal2(newVal);         }
  const handleInputVal3 = (e)         => { console.log('input_val_3: ', input_val_3); setInputVal3(e.target.value); }
  const handleInputVal4 = (e)         => { console.log('input_val_4: ', input_val_4); setInputVal4(e.target.value); }
  const handleInputVal5 = (e)         => { console.log('input_val_5: ', input_val_5); setInputVal5(e.target.value); }

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '80vh'}}>

        {/* (1):  instructor_name,     Text Input Field */}
        <TextField required id="standard-required" label="Required" value={input_val_1} onChange={handleInputVal1}/>

        {/* (2) type,                Dropdown */}
        <div>
          <FormControl className={classes.formControl} style={{width: '100%'}}>
            <InputLabel id="client-classType-dropdown">Exercise Type</InputLabel>
            <Select
              labelId="client-classType-dropdown"
              value={input_val_3}
              onChange={handleInputVal3}
            >
              <MenuItem value={'aerobic'}>Aerobic</MenuItem>
              <MenuItem value={'weights'}>Weight Training</MenuItem>
              <MenuItem value={'yoga'}>Yoga</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* (3) intensity,           Dropdown              --- */}
        <div>
          <FormControl className={classes.formControl} style={{width: '100%'}}>
            <InputLabel id="instructor-classIntensity-dropdown">Intensity</InputLabel>
            <Select
              labelId="instructor-classIntensity-dropdown"
              value={input_val_4}
              onChange={handleInputVal4}
              style={{width: '100%'}}
            >
              <MenuItem value={'low'}>low</MenuItem>
              <MenuItem value={'medium'}>medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* (4) location,            Dropdown              --- */}
        <div>
          <FormControl className={classes.formControl} style={{width: '100%'}}>
            <InputLabel id="instructor-classLocation-dropdown">Location</InputLabel>
            <Select
              labelId="instructor-classLocation-dropdown"
              value={input_val_5}
              onChange={handleInputVal5}
              style={{width: '100%'}}
            >
              <MenuItem value={'nebraska'}>Nebraska</MenuItem>
              <MenuItem value={'texas'}>Texas</MenuItem>
              <MenuItem value={'oklahoma'}>Oklahoma</MenuItem>
              <MenuItem value={'south-dakota'}>South Dakota</MenuItem>
              <MenuItem value={'north-dakota'}>North Dakota</MenuItem>
              <MenuItem value={'kansas'}>Kansas</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* (2) duration            Slider */}
        <div>
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                color='secondary'
                value={input_val_2}
                onChange={handleInputVal2}
              />
            </Grid>
            <Grid item>{input_val_2}</Grid>
          </Grid>
        </div>
      </div>
      <div></div>
      <div></div>
    </form>
  );
}