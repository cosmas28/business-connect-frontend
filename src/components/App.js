import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SigninPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import UserBusinessView from './Dashboard/UserBusinessView';
import Dashboard from './Dashboard/Dashboard';
import AddBusiness from './Dashboard/AddBusiness';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.loggedIn = sessionStorage.getItem('loggedIn');
    }

    render() {
        return (
            <BrowserRouter>
                <div className="page-wrapper">
                    <Switch>
                        <Route exact path="/" component={SignUpPage}/>
                        <Route exact path="/login" component={SignInPage}/>
                        <Route exact path="/reset_password" component={ResetPasswordPage}/>
                        <ProtectedRoute path="/dashboard" loggedIn={this.loggedIn} component={Dashboard} />
                        <Route path="/user_business" component={UserBusinessView} />
                        <Route path="/register_business" component={AddBusiness} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
