import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global-styles/styles.scss'; // global styles
// import { gsap } from 'gsap'; // for animations
import RegistrationForm  from './components/forms/registration-form/registration-form.js';


function App() {
  return (
    <Router>
      <Route exact path="/">
        <RegistrationForm></RegistrationForm>
      </Route>

      <Route path="/registration-page-2">
        <h1>page 2</h1>
      </Route>
    </Router>
  );
}

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);