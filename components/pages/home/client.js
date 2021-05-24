import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import {buttonStyles, inputStyles} from '../../../global-styles/form-styles.js';
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

const ClientHomePage = () => {

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

  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();
  const classes = useStyles();

  // --------------------------------------------

  const [input_val_1, setInputVal1] = useState(NaN);
  const handleInputVal1 = e => setInputVal1(Number(e.target.value));

  // --------------------------------------------

  return (
    <div className="homepage homepage-client">
      <div>
        <h1>Client Home Page</h1>

        {/* - - - - - - - - - - - - - - - - - - */}

        <Button variant="outlined" color="secondary" onClick={() => {

          // -Orlando TODO (1/6): Drop API-call here
          // --get all classes          GET     /api/auth/users/classes            N/A              N/A                Fetches all the classes from the database
          const endpoint = '/api/auth/users/classes';
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}>
          Get All Classes
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}


        <TextField
          label="Enter Class ID Number"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">ID#</InputAdornment>,
          }}
          onChange={handleInputVal1}
        />


        <Button variant="outlined" color="secondary" onClick={() => {
          // -Josh TODO (1/5): Get <id> from text field
          const id = input_val_1; // input field

          // -Orlando TODO (2/6): Drop API-call here
          // get classes by Id        GET     /api/auth/users/classes/:id        id               N/A                Fetches the class with given Id.
          const endpoint = `/api/auth/users/classes/:${id}`;
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}
        disabled={input_val_1 ? false : true}
        >
          Get Classes by ID
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}

        <Button variant="outlined" color="secondary" onClick={() => {

          // -Josh TODO (2/5): Get <location>
          const location = 'texas'; // dropdown

          // -Orlando TODO (3/6): Drop API-call here
          // get classes by Location  GET     /api/auth/users/classes/location   location         N/A                Gets all the class in that location
          const endpoint = `/api/auth/users/classes/${location}`;
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}>
          Get Classes by Location
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}

        <Button variant="outlined" color="secondary" onClick={() => {

          // -Josh TODO (3/5): Get <intensity>
          const intensity = 0; // slider

          // -Orlando TODO (4/6): Drop API-call here
          // get classes by intensity GET     /api/auth/users/classes/intensity  intensity        N/A                Gets all the class in that intensity. "low", "medium", or "high"
          const endpoint = `/api/auth/users/classes/${intensity}`;
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}>
          Get Classes by Intensity
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}

        <Button variant="outlined" color="secondary" onClick={() => {

          // -Josh TODO (4/5): Get <duration>
          const duration = 0; // slider

          // -Orlando TODO (5/6): Drop API-call here
          // get classes by duration  GET     /api/auth/users/classes/duration   duration         N/A                Gets all the class of that duration. Has to be double.
          const endpoint = `/api/auth/users/classes/${duration}`;
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));
        }}>
          Get Classes by Duration
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}

        <Button variant="outlined" color="secondary" onClick={() => {

          // -Josh TODO (5/5): Get <duration>
          const type = 'aerobic'; // Checkboxes

          // -Orlando TODO (6/6): Drop API-call here
          // get classes by type      GET     /api/auth/users/classes/type       type             N/A                Gets all the class of that type.
          const endpoint = `/api/auth/users/classes/${type}`;
          axios.get(`https://anywhere-fitness-ptbw.herokuapp.com${endpoint}`)
               .then(res => console.log('response: ', res))
               .catch(err => console.log(err));          
        }}>
          Get Classes by Type
        </Button>

        {/* - - - - - - - - - - - - - - - - - - */}
      </div>
    </div>
  ); // return
}; // ClientHomePage

// ==============================================
// ==============================================

export default ClientHomePage;