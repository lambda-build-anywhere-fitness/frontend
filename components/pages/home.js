import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { Grid, LinearProgress } from "@material-ui/core";
import {buttonStyles, inputStyles} from '../../global-styles/form-styles.js';

// ==============================================
// ==============================================

const PublicHomePage = () => {

  // --------------------------------------------

  return (<h1>Public HomePage</h1>);

  // --------------------------------------------

};

// ==============================================
// ==============================================

export default PublicHomePage;