import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

// ==============================================
// ==============================================

const RegistrationFormPg3 = ({formData, formData_2}) => {

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
      <p>Form <strong>First Name</strong> Field (in State): {formData_2.first_name}</p>
    </div>
  );
}
export default RegistrationFormPg3;