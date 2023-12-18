import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return token != null;
};

const ProtectedRoute = ({ element: Component, ...rest }) => (
    <Route
        {...rest}
        element={isAuthenticated() ? Component : <Navigate to="/login" replace />}
    />
);

export default ProtectedRoute;