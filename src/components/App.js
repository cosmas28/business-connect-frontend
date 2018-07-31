import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SigninPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import ConfirmEmail from './resetPassword/ConfirmEmail';
import Dashboard from './Dashboard/Dashboard';
import AddBusiness from './Dashboard/AddBusiness';
import ProtectedRoute from './ProtectedRoute';
import DetailBusinessView from './Dashboard/DetailBusinessView';
import UpdateBusiness from './Dashboard/UpdateBusinessContainer';
import BusinessCategory from './Dashboard/BusinessCategory';
import MyBusinesses from './Dashboard/MyBusinesses';
import PageNotFound from './common/NotFoundPage';
import SearchPage from './Dashboard/SearchPage';

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
                        <Route path="/businesses/:id" component={DetailBusinessView} />
                        <Route path="/register_business" component={AddBusiness} />
                        <Route path="/business/update/:id" component={UpdateBusiness} />
                        <ProtectedRoute exact path="/category/:category" loggedIn={this.loggedIn} component={BusinessCategory} />
                        <ProtectedRoute exact path="/user/businesses/:userId" loggedIn={this.loggedIn} component={MyBusinesses} />
                        <ProtectedRoute exact path="/search/results/:search" loggedIn={this.loggedIn} component={SearchPage} />
                        <Route component={PageNotFound} />
                        <Route path="/404" component={PageNotFound} />
                        <ProtectedRoute exact path="/results" loggedIn={this.loggedIn} component={SearchPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
