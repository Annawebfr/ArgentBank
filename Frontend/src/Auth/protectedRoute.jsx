//mis en commentaire vu que j'ai changé et j'ai stocke le token dans le localstorage en ne pas dans la redux
/**import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) { 
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;**/


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Vérifie si le token est présent
  const location = useLocation();

  if (!token) { 
    return <Navigate to="/sign-in" state={{ from: location }} />; // Redirige vers login si pas de token
  }

  return children;
};

export default ProtectedRoute;
