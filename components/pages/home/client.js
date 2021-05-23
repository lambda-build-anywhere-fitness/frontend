import React from 'react';

// ==============================================
// ==============================================

// https://github.com/lambda-build-anywhere-fitness/backend#endpoints-for-the-users

// Description              Method  Endpoint                           Body (required)	Body (optional)    Notes
// -----------              ------  --------                           ---------------  ---------------    -----
// get allclasses           GET     /api/auth/users/classes	           N/A              N/A                Fetches all the classes from the database
// get classes by Id        GET     /api/auth/users/classes/:id        id               N/A                Fetches the class with given Id.
// get classes by Location  GET     /api/auth/users/classes/location   location         N/A                Gets all the class in that location
// get classes by intensity GET     /api/auth/users/classes/intensity  intensity        N/A                Gets all the class in that intensity. "low", "medium", or "high"
// get classes by duration  GET     /api/auth/users/classes/duration   duration         N/A                Gets all the class of that duration. Has to be double.
// get classes by type      GET     /api/auth/users/classes/type       type             N/A                Gets all the class of that type.

// ==============================================
// ==============================================

const ClientHomePage = () => {
  return (
    <div>
      <h1>Client Home Page</h1>
    </div>
  ); // return
}; // ClientHomePage

// ==============================================
// ==============================================

export default ClientHomePage;