import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SigninPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import ConfirmEmail from './resetPassword/ConfirmEmail';
import UserBusinessView from './Dashboard/UserBusinessView';
import Dashboard from './Dashboard/Dashboard';
import AddBusiness from './Dashboard/AddBusiness';
import ProtectedRoute from './ProtectedRoute';
import DetailBusinessView from './Dashboard/DetailBusinessView';

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
                        <Route exact path="/reset_password/password/:token" component={ResetPasswordPage}/>
                        <Route exact path="/reset_password/confirm_email" component={ConfirmEmail}/>
                        <ProtectedRoute path="/dashboard" loggedIn={this.loggedIn} component={Dashboard} />
                        <Route path="/user_business" component={UserBusinessView} />
                        <Route path="/businesses/:id" component={DetailBusinessView} />
                        <Route path="/register_business" component={AddBusiness} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
