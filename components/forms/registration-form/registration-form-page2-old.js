import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";

// ==============================================
// ==============================================

const RegistrationFormPg2 = ({formData}) => {

  // --------------------------------------------

  const inputRef = useRef(null);

  // --------------------------------------------

  const viewport_geometry = () => {

    const viewport_width = window.innerWidth;
    const viewport_height = window.innerHeight;
    const viewport_center_x = viewport_width / 2;
    const viewport_center_y = viewport_height / 2;

    const document_height1 = document.documentElement.offsetHeight;
    const document_height2 = document.documentElement.getBoundingClientRect().height;
    const scroll_offset = window.scrollY;

    return {viewport_center_x, viewport_center_y, viewport_width, viewport_height};
  };

  // --------------------------------------------

  const element_geometry = (elem) => {

    const geometry = elem.getBoundingClientRect(); 
    // console.log('square_geometry: ', square_geometry);
    
    // (x1, y1) -----------------------|
    //    |                            |
    //    |                            |
    //    |----------(x0, y0)----------|
    //    |                            |
    //    |                            |
    //    |-------------------------(x2, y2)


    const w = geometry.width;
    const h = geometry.height;
    const x1 = geometry.left;
    const y1 = geometry.top;
    const x2 = geometry.right;
    const y2 = geometry.bottom;
    const x0 = x1 + w/2;
    const y0 = y1 + h/2;

    return {x0, y0, x1, y1, x2, y2, w, h};
  };

  // --------------------------------------------

  const timeline = gsap.timeline({
    repeat: 0,
    defaults: {duration: 1}
  });
  const {viewport_width, viewport_center_x} = viewport_geometry();
  
  // --------------------------------------------

  useEffect(() => {
    const elem = inputRef.current;
    console.log('Modal.js, elem: ', elem);

    gsap.to(elem, {background: 'green', opacity: 1, duration: 0.5});
    
    const {x0} = element_geometry(elem);
    // timeline.to(elem, { x: viewport_width + viewport_center_x - x0} );
    // timeline.to(elem, { x: viewport_width } );
    // timeline.to(elem, { x: viewport_center_x } );
    // timeline.to(elem, { x: -x0 } );
    // timeline.to(elem, { x: viewport_center_x - x0 } );
    timeline.to(elem, { x: viewport_width - (viewport_center_x + x0) } );
  }, []);

  // --------------------------------------------

  return (
    <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', border: 'solid red 10px'}}>
      <p ref={inputRef} style={{position: 'absolute', left: '-100vw'}}>Form <strong>Email</strong> Field (in State): {formData.email}</p>
      {/* <p ref={inputRef} style={{position: 'absolute',                     border: 'dashed hotpink 2px'}}>Form <strong>Email</strong> Field (in State): {formData.email}</p> */}
      <hr />
      <p>Form <strong>Password</strong> Field (in State): {formData.password}</p>
      <hr />
      <p> <strong>TODO:</strong> Make button click on previous page make POST request to backend with data from form that is currently in state</p>
    </div>
  );
}
export default RegistrationFormPg2;