import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

// ==============================================
// ==============================================

const RegistrationFormPg3 = ({formData}) => {

  // --------------------------------------------

  const inputRef = useRef(null);

  // --------------------------------------------

  useEffect(() => {
    const elem = inputRef.current;
    console.log('Modal.js, elem: ', elem);
  }, []);

  // --------------------------------------------

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100vh', width: '100vw', border: 'solid red 10px'}}>
      <p>Form <strong>Email</strong> Field (in State): {formData.email}</p>
      {/* <p ref={inputRef} style={{position: 'absolute',                     border: 'dashed hotpink 2px'}}>Form <strong>Email</strong> Field (in State): {formData.email}</p> */}
      <p>Form <strong>Password</strong> Field (in State): {formData.password}</p>
      <p>Form <strong>First Name</strong> Field (in State): {formData.first_name}</p>
      <p>Form <strong>Last Name</strong> Field (in State): {formData.last_name}</p>
      <p>Form <strong>Country</strong> Field (in State): {formData.country}</p>
      <p>Form <strong>Mailing List?</strong> Field (in State): {formData.mailing_list}</p>

      <p>All the combined form data is sent to the server on the previous page (hence the loading animation).  This is done in line 195 in 'registration-form-page2.js'</p>

    </div>
  );
}
export default RegistrationFormPg3;