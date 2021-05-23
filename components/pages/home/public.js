import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// ==============================================
// ==============================================

const PublicHomePage = () => {

  return (
    <div style={{display: 'grid', placeItems: 'center', height: '100vh', width: '100vw', background: 'lightblue'}}>
      <h1>Public HomePage</h1>

      <div>
        <Link to="/login">Log In</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  ); // return

}; // PublicHomePage

// ==============================================
// ==============================================

export default PublicHomePage;