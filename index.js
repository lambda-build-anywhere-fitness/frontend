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
    primary:   {main: '#ffffff'},
    secondary: {main: '#000000'}
  },
});

// ==============================================
// ==============================================

import RegisterPage from './components/pages/register.js';
import LoginPage    from './components/pages/login.js';


// ==============================================
// ==============================================

const App = () => {

  const [logged_in, setLoggedIn] = useState(false);

  // --------------------------------------------

  return (
    <Router>
    
      <Route exact path="/">
        {/* {logged_in ? <Redirect to="/register" /> : <PublicHomePage />} */}
        <RegisterPage></RegisterPage>
      </Route>

      <Route path="/register">
        <RegisterPage></RegisterPage>
      </Route>

      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>

      <Route path="/app">
        <h1>Home</h1>
      </Route>
    
    </Router>
  ); // return
};

// ==============================================
// ==============================================

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);