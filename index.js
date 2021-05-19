import React from 'react';
import { render } from 'react-dom';
import './global-styles/styles.scss'; // global styles
import { gsap } from 'gsap'; // for animations
import RegistrationForm  from './components/forms/registration-form/registration-form.js';


function App() {
  return (
    <div>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);