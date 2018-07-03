import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return loggedIn
                    ? <Component {...props} />
                    : <Redirect to={
                        {
                        pathname: '/login',
                        state: {
                            error: 'You need to login first!',
                            prevLocation: path
                        }
                    }
                } />;
            }}/>
    );
};

export default ProtectedRoute;
