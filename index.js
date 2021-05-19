import React from 'react';
import { render } from 'react-dom';
import './global-styles/styles.scss'; // global styles
import { gsap } from 'gsap'; // for animations

// React Components map props into elements
function App() {
  return (
    <div>
      <h1>JOSH</h1>
    </div>
  );
}

render(
  <App />,                          // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);