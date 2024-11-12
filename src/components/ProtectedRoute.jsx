// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../features/authenticationSlice';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(getUser);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;