import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global-styles/styles.scss'; // global styles
// import { gsap } from 'gsap'; // for animations
import RegistrationFormPg1  from './components/forms/registration-form/registration-form-page1.js';
import RegistrationFormPg2  from './components/forms/registration-form/registration-form-page2.js';
// import BasicTextFields from './components/forms/material-form/material-form.js';

// ==============================================

function App() {
  
  // -------------------------------------------

  const [formData, setFormData] = useState({ email: '', password: '' });
  useEffect(() => {
    console.log('formData in top-level component: ', formData);
  }, [formData]);

  // -------------------------------------------

  return (
    <Router>
      <Route exact path="/">
        <RegistrationFormPg1 setFormData={setFormData}></RegistrationFormPg1>
      </Route>

      <Route path="/registration-page-2">
        {/* <BasicTextFields></BasicTextFields> */}
        <RegistrationFormPg2 formData={formData}></RegistrationFormPg2>
      </Route>
    </Router>
  );
}

// ==============================================

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);