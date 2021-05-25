import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import Slider from '@material-ui/core/Slider';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// ==============================================
// ==============================================

// https://github.com/lambda-build-anywhere-fitness/backend#endpoints-for-the-users

// Description              Method  Endpoint                           Body (required)	Body (optional)    Notes
// -----------              ------  --------                           ---------------  ---------------    -----
// get all classes          GET     /api/auth/users/classes            N/A              N/A                Fetches all the classes from the database
// get classes by Id        GET     /api/auth/users/classes/:id        id               N/A                Fetches the class with given Id.
// get classes by Location  GET     /api/auth/users/classes/location   location         N/A                Gets all the class in that location
// get classes by intensity GET     /api/auth/users/classes/intensity  intensity        N/A                Gets all the class in that intensity. "low", "medium", or "high"
// get classes by duration  GET     /api/auth/users/classes/duration   duration         N/A                Gets all the class of that duration. Has to be double.
// get classes by type      GET     /api/auth/users/classes/type       type             N/A                Gets all the class of that type.

// ==============================================
// ==============================================

const InstructorHomePage = () => {

  // --------------------------------------------

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

  // --------------------------------------------

  const classes = useStyles();

  // --------------------------------------------

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

  // --------------------------------------------

  const initially_disable = (input_val) => input_val ? false : true;

  // --------------------------------------------

  return (
    <div className="homepage homepage-client">
      <div className="container">
        <h1>Instructor Home Page</h1>

        {/* - - - - - - - - - - - - - - - - - - */}
        <div className="card">
          <Button variant="outlined" color="secondary" style={{width: '100%'}} onClick={() => {

          // -Orlando TODO (1/6): Drop API-call here
          // --get all classes          GET     /api/auth/users/classes            N/A              N/A                Fetches all the classes from the database
          const endpoint = '/api/auth/users/classes';
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}>
          Get All Classes
        </Button>
        </div>
        {/* - - - - - - - - - - - - - - - - - - */}

        <div className="card">
          <TextField
            label="Enter Class ID Number"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">ID#</InputAdornment>,
            }}
            onChange={handleInputVal1}
          />

          <Button variant="outlined" color="secondary" style={{width: '100%'}} onClick={() => {

            const id = input_val_1; // input field

            // -Orlando TODO (2/6): Drop API-call here
            // get classes by Id        GET     /api/auth/users/classes/:id        id               N/A                Fetches the class with given Id.
            const endpoint = `/api/auth/users/classes/:${id}`;
            axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
                .then(res => console.log('response: ', res))
                .catch(err => console.log(err));
            }}
            disabled={initially_disable(input_val_1)}
          >
            Get Classes by ID
          </Button>
        </div>

        {/* - - - - - - - - - - - - - - - - - - */}

        <div className="card">

          <FormControl className={classes.formControl}>
            <InputLabel id="client-classType-dropdown">Location</InputLabel>
            <Select
              labelId="client-classType-dropdown"
              value={input_val_4}
              onChange={handleInputVal4}
            >
              <MenuItem value={'nebraska'}>Nebraska</MenuItem>
              <MenuItem value={'texas'}>Texas</MenuItem>
              <MenuItem value={'oklahoma'}>Oklahoma</MenuItem>
              <MenuItem value={'south-dakota'}>South Dakota</MenuItem>
              <MenuItem value={'north-dakota'}>North Dakota</MenuItem>
              <MenuItem value={'kansas'}>Kansas</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" color="secondary" onClick={() => {

            const location = input_val_4; // dropdown

            // -Orlando TODO (3/6): Drop API-call here
            // get classes by Location  GET     /api/auth/users/classes/location   location         N/A                Gets all the class in that location
            const endpoint = `/api/auth/users/classes/${location}`;
            axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
                .then(res => console.log('response: ', res))
                .catch(err => console.log(err));
            }}
            disabled={initially_disable(input_val_4)}
          >
            Get Classes by Location
          </Button>
        </div>
        
        {/* - - - - - - - - - - - - - - - - - - */}

        <div className="card">

          <FormControl className={classes.formControl}>
            <InputLabel id="client-classIntensity-dropdown">Intensity</InputLabel>
            <Select
              labelId="client-classIntensity-dropdown"
              value={input_val_5}
              onChange={handleInputVal5}
            >
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" color="secondary" style={{width: '100%'}} onClick={() => {

            const intensity = input_val_5; // dropdown

            // -Orlando TODO (4/6): Drop API-call here
            // get classes by intensity GET     /api/auth/users/classes/intensity  intensity        N/A                Gets all the class in that intensity. "low", "medium", or "high"
            const endpoint = `/api/auth/users/classes/${intensity}`;
            axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
                .then(res => console.log('response: ', res))
                .catch(err => console.log(err));
            }}
            disabled={initially_disable(input_val_5)}
          >
            Get Classes by Intensity
          </Button>
        </div>

        {/* - - - - - - - - - - - - - - - - - - */}

        <div className="card">

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


          <Button variant="outlined" color="secondary" onClick={() => {

            const duration = input_val_2; // slider

            // -Orlando TODO (5/6): Drop API-call here
            // get classes by duration  GET     /api/auth/users/classes/duration   duration         N/A                Gets all the class of that duration. Has to be double.
            const endpoint = `/api/auth/users/classes/${duration}`;
            axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
                .then(res => console.log('response: ', res))
                .catch(err => console.log(err));
            }}
            disabled={initially_disable(input_val_2)}
          >
            Get Classes by Duration
          </Button>
        </div>
        
        {/* - - - - - - - - - - - - - - - - - - */}

        <div className="card">
  
          <FormControl className={classes.formControl}>
            <InputLabel id="client-classType-dropdown">Type</InputLabel>
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

          <Button variant="outlined" color="secondary" onClick={() => {

            // -Josh TODO (5/5): Get <duration>
            const type = input_val_3; // Checkboxes

            // -Orlando TODO (6/6): Drop API-call here
            // get classes by type      GET     /api/auth/users/classes/type       type             N/A                Gets all the class of that type.
            const endpoint = `/api/auth/users/classes/${type}`;
            axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
                .then(res => console.log('response: ', res))
                .catch(err => console.log(err));          
            }}
            disabled={initially_disable(input_val_3)}
          >
            Get Classes by Type
          </Button>
        </div>
        
        {/* - - - - - - - - - - - - - - - - - - */}
      
      </div>
    </div>
  ); // return
}; // ClientHomePage

// ==============================================
// ==============================================

export default InstructorHomePage;