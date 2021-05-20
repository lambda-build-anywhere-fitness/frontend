import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global-styles/styles.scss'; // global styles
// import { gsap } from 'gsap'; // for animations
import RegistrationForm  from './components/forms/registration-form/registration-form.js';
import BasicTextFields from './components/forms/material-form/material-form.js';

const init_form = { email: '', password: '' };

// ==============================================

function App() {
  
  // -------------------------------------------

  const [formData, setFormData] = useState(init_form);
  useEffect(() => {
    console.log('formData in top-level component: ', formData);
  }, [formData]);


  // -------------------------------------------

  return (
    <Router>
      <Route exact path="/">
        <RegistrationForm init_form={init_form} setFormData={setFormData}></RegistrationForm>
      </Route>

      <Route path="/registration-page-2">
        {/* <BasicTextFields></BasicTextFields> */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', border: 'solid red 10px'}}>
          <p style={{fontWeight: 'bold'}}>TODO: Make button click on previous page make POST request to backend with data from form :)</p>
        </div>
      </Route>
    </Router>
  );
}

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);