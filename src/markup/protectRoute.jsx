import React from 'react';
import { Redirect, Route } from "react-router-dom";



function ProtectedRoute({ component: Component, ...restOfProps }) {
 const token = true;
 let isAuthenticated = ''
 if (token) {
  isAuthenticated = true
 }

 return (
  <Route
   {...restOfProps}
   render={(props) =>
    isAuthenticated ? <Component {...props} /> : <Redirect exact to="/login" />
   }
  />
 );
}

export default ProtectedRoute;
