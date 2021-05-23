import React, {useState, useEffect}       from 'react';
import { render }                         from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ==============================================
// ==============================================

import './global-styles/styles.scss';

// ==============================================
// ==============================================

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

// ==============================================
// ==============================================

import RegistrationPage from './components/forms/register.js';
import LoginPage        from './components/forms/login.js';

// ==============================================
// ==============================================

const App = () => (
  <Router>
  
    <Route exact path="/">
      <RegistrationPage></RegistrationPage>
    </Route>

    <Route path="/login">
      <LoginPage></LoginPage>
    </Route>

    <Route path="/home">
      <h1>Home</h1>
    </Route>

  </Router>
);

// ==============================================
// ==============================================

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);