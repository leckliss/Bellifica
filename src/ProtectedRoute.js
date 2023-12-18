import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return token != null;
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;