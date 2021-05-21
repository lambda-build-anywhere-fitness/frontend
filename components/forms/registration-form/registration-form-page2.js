import React from 'react';

const RegistrationFormPg2 = ({formData}) => {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', border: 'solid red 10px'}}>
        <div style={{height: '80vh', width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <p>Form <strong>Email</strong> Field (in State): {formData.email}</p>
          <hr />
          <p>Form <strong>Password</strong> Field (in State): {formData.password}</p>
          <hr />
          <p> <strong>TODO:</strong> Make button click on previous page make POST request to backend with data from form that is currently in state :)</p>
        </div>
      </div>
    </>
  );
}
export default RegistrationFormPg2;