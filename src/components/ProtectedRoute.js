import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, loggedIn, path, ...rest }) => {
    return (
        <Route 
            path={path}
            {...rest}
            render={props => {
                return loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: {
                        prevLocation: path,
                        error: "You need to login first!",
                    }}}/>
                );
            }}/>
    );
};

export default ProtectedRoute;
