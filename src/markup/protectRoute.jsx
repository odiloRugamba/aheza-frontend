import React from 'react';
import { Redirect, Route } from "react-router-dom";



function ProtectedRoute({ component: Component, ...restOfProps }) {
 // const token = localStorage.getItem("token");
 const token = true;
 let isAuthenticated = ''
 if (token) {
  isAuthenticated = true
 }
 console.log("this", isAuthenticated);

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
