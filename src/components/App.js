import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from "axios";

import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SignInPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import UserBusinessView from './Dashboard/UserBusinessView';
import Dashboard from './Dashboard/Dashboard';
import AddBusiness from './Dashboard/AddBusiness'
import ProtectedRoute from './ProtectedRoute';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.loggedIn = sessionStorage.getItem('loggedIn');
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/businesses';
    }

    render() {
        return (
            <BrowserRouter>
                <div className="page-wrapper">
                    <Route exact path="/" component={SignUpPage}/>
                    <Route exact path="/login" component={SignInPage}/>
                    <Route exact path="/reset_password" component={ResetPasswordPage}/>
                    <ProtectedRoute path="/dashboard" loggedIn={this.loggedIn} component={Dashboard} />
                    <Route path="/dashboard/user_business" component={UserBusinessView} />
                    <Route path="/dashboard/register_business" component={AddBusiness} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
