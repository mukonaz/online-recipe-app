import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserFromLocalStorage } from './services/authService';

const ProtectedRoute = ({ children }) => {
    const user = getUserFromLocalStorage();
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
