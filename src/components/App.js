import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from "axios";

import Header from './common/Header';
import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SigninPage';
import Footer from './common/Footer';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import Dashboard from './Dashboard/Dashboard'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            loginErrorMessage: '',
            loginSuccessMessage: '',
            redirect: false,
            userId: null
        };
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/login';
    }

    handleLoginInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        const input = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(this.apiUrl, input).then(response => {
            this.setState({
                loginSuccessMessage: response.data.response_message,
                accessToken: response.data.access_token,
                userId: response.data.user_id,
                email: '',
                password: '',
                redirect: true
            });
        }).catch((error) => {
            if (error.response) {
                this.setState({ 'loginErrorMessage': error.response.data.response_message });
            }
        });
    };

    render() {
        const { redirect } = this.state;
        let isRedirect = null;
        if (redirect) {
            isRedirect = <Redirect to={{
                pathname: '/dashboard',
                state: {
                    access_token: this.state.accessToken,
                    user_id: this.state.userId
                }
            }} />;
        }
        return (
            <BrowserRouter>
                <div className="page-wrapper">
                    <Header />
                    {isRedirect}
                    <Route exact path="/" component={SignUpPage}/>
                    <Route path="/login" render={() => (
                        <SignInPage
                            handleLoginInputChange={this.handleLoginInputChange}
                            handleLoginSubmitForm={this.handleLoginSubmit}
                            loginPutErrorMessage={this.state.loginErrorMessage}
                            loginSuccessMessage={this.state.loginSuccessMessage}
                        />
                    ) }/>
                    <Route exact path="/reset_password" component={ResetPasswordPage}/>
                    <Route path="/dashboard" render={() => (
                        <Dashboard
                            access_token={this.state.accessToken}
                            user_id={this.state.userId}
                        />
                    ) }/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
