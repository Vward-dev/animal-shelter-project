import { Navigate } from 'react-router-dom';

import { useContext } from 'react';

import { UserContext } from '../context/UserContext';



export default function ProtectedRoute({ children, requiredRole }) {



  // Get the user from the user context

  const user = useContext(UserContext);



  // If there's an authenticated user, continue to child route

  if (user && user.authorities[0].name === requiredRole) {

    return children;

  }
  
  



  // Otherwise, send to login page

  return <Navigate to="/login" />;

}

