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

import Modal_AddClasses from './modal-add.js';
import Modal_UpdateClasses from './modal-update.js';
import Modal_DeleteClasses from './modal-delete.js';


// ==============================================
// ==============================================

// https://github.com/lambda-build-anywhere-fitness/backend#endpoints-for-the-users

// Description              Method  Endpoint                           Body (required)                                                                      Body (optional)    Notes
// -----------              ------  --------                           ---------------  ---------------                                                     ---------------    -----
// Add class                POST    /api/auth/instructor/classes       name, instructor_name, type, intensity,location, date, max_size, duration, signedUp  N/A                Creates a new class object in the database. Date has to string in "04/19/2020" format. Duration is a float and signedUp is a boolean(false as a default)
// Update Class             PUT     /api/auth/instructor/classes/:id   any of the field                                                                     N/A	               Updates the class with given Id
// Removes Class            DELETE  /api/auth/instructor/classes/:id   any of the field                                                                     N/A	               Deletes the class with given Id
// ==============================================
// ==============================================

const InstructorHomePage = () => {

  // --------------------------------------------

  return (
    <div className="homepage homepage-client">
      <div className="container" style={{position: 'relative'}}>
        <div style={{position: 'absolute', display: 'grid', placeItems: 'center', top: '0', width: '100%', height: '200px'}}>
          <h3 >Instructor Home Page</h3>
        </div>

        <div className="card" style={{display: 'flex', justifyContent: 'space-evenly'}}>

          {/* /api/auth/instructor/classes */}
          <Modal_AddClasses endpoint={'add'}/>

          {/* /api/auth/instructor/classes/:id	 */}
          <Modal_UpdateClasses endpoint={'update'} />


          {/* /api/auth/instructor/classes/:id */}
          <Modal_DeleteClasses endpoint={'delete'}/>

        </div>
      
      </div>
    </div>
  ); // return
}; // ClientHomePage

// ==============================================
// ==============================================

export default InstructorHomePage;