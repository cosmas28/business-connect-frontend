import React from 'react';
import axios from "axios";
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../common/Header';
import SignInForm from './SignInForm';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            loginErrorMessage: '',
            loginSuccessMessage: ''
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
            sessionStorage.setItem('accessToken', response.data.access_token);
            sessionStorage.setItem('userId', response.data.user_id);
            sessionStorage.setItem('loggedIn', true);
            this.setState({
                loginSuccessMessage: response.data.response_message,
                email: '',
                password: '',
                redirect: true
            });
        }).catch((error) => {
            if (error.response) {
                this.setState({ loginErrorMessage: error.response.data.response_message });
            }
        });
    };

    render () {
        const { redirect } = this.state;
        let isRedirect = null;
        if (redirect) {
            isRedirect = <Redirect to={{
                pathname: '/dashboard'
            }} />;
        }
        
        return (
            <div>
                {isRedirect}
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 com-xs-12">
                                <SignInForm
                                    handleLoginInputChange={this.handleLoginInputChange}
                                    handleLoginSubmitForm={this.handleLoginSubmit}
                                    loginPutErrorMessage={this.state.loginErrorMessage}
                                    loginSuccessMessage={this.state.loginSuccessMessage}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default SignInPage;
