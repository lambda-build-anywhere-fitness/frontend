import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global-styles/styles.scss'; // global styles

import RegistrationFormPg1 from './components/forms/registration-form/registration-form-page1.js';
import RegistrationFormPg2 from './components/forms/registration-form/registration-form-page2.js';
import RegistrationFormPg3 from './components/forms/registration-form/registration-form-page3.js';

// ==============================================

function App() {
  
  // -------------------------------------------

  const [formData, setFormData]     = useState({ email: '', password: ''});
  const [formData_2, setFormData_2] = useState({ first_name: '', last_name: '', country: '', mailing_list: false });
  useEffect(() => {
    console.log('Page 1 form data in top-level component: ', formData);
  }, [formData]);
  useEffect(() => {
    console.log('Page 2 form data in top-level component: ', formData_2);
  }, [formData_2]);

  // -------------------------------------------

  return (
    <Router>
      <Route exact path="/">
        <RegistrationFormPg1 setFormData={setFormData}></RegistrationFormPg1>
      </Route>

      <Route path="/registration-page-2">
        <RegistrationFormPg2 setFormData={setFormData_2}></RegistrationFormPg2>
      </Route>

      <Route path="/registration-page-3">
        <RegistrationFormPg3 formData={formData} formData_2={formData_2}></RegistrationFormPg3>
      </Route>
    </Router>
  );
}

// ==============================================

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);