import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {

    const token = localStorage.getItem('authToken');

    return token != null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default ProtectedRoute;