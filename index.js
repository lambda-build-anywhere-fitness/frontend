import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global-styles/styles.scss'; // global styles

import RegistrationFormPg1 from './components/forms/registration-form/registration-form-page1.js';
import RegistrationFormPg2 from './components/forms/registration-form/registration-form-page2.js';
import RegistrationFormPg3 from './components/forms/registration-form/registration-form-page3.js';

import LoginFormPg from './components/forms/login-form/login-form-page.js';

// ==============================================

function App() {
  
  // -------------------------------------------
  const [formData,   setFormData  ] = useState({ email: '', password: '', first_name: '', last_name: '', country: '', mailing_list: false });
  const [formData_1, setFormData_1] = useState({ email: '', password: '' });
  const [formData_2, setFormData_2] = useState({ first_name: '', last_name: '', country: '', mailing_list: false });
  useEffect(() => {
    setFormData({...formData_1, ...formData_2});
    console.log('Page 1 form data in top-level component: ', formData);
  }, [formData_1]);
  useEffect(() => {
    setFormData({...formData_1, ...formData_2});
    console.log('Page 2 form data in top-level component: ', formData);
  }, [formData_2]);
  
  // -------------------------------------------

  const [formData_login,   setFormData_login  ] = useState({ email: '', password: '' });
  useEffect(() => {
    setFormData({...formData_1, ...formData_2});
    console.log('Page 1 form data in top-level component: ', formData);
  }, [formData_1]);

  // -------------------------------------------

  return (
    <Router>
      <Route exact path="/">
        <RegistrationFormPg1 setFormData={setFormData_1}></RegistrationFormPg1>
      </Route>

      <Route path="/registration-page-2">
        <RegistrationFormPg2 setFormData={setFormData_2}></RegistrationFormPg2>
      </Route>

      <Route path="/registration-page-3">
        <RegistrationFormPg3 formData={formData}></RegistrationFormPg3>
      </Route>



      <Route path="/login-page">
        <LoginFormPg setFormData={setFormData_1}></LoginFormPg>
      </Route>

      <Route path="/home">
        <h1>Home</h1>
      </Route>

    </Router>
  );
}

// ==============================================

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);