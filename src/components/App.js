import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";

import Header from './common/Header';
import SignUpPage from './signup/SignupPage';
import SignInPage from './signin/SigninPage';
import Footer from './common/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'accessToken': '',
            'loginErrorMessage': '',
            'loginSuccessMessage': ''
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
            'email': this.state.email,
            'password': this.state.password
        };
        axios.post(this.apiUrl, input).then(response => {
            this.setState({
                'loginSuccessMessage': response.data.response_message,
                'accessToken': response.data.access_token,
                'email': '',
                'password': ''
            });
            // event.target.reset();
        }).catch((error) => {
            if (error.response) {
                this.setState({ 'loginErrorMessage': error.response.data.response_message });
            }
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="page-wrapper">
                    <Header />
                    <Route exact path="/" component={SignUpPage}/>
                    <Route path="/login" render={() => (
                        <SignInPage
                            handleLoginInputChange={this.handleLoginInputChange}
                            handleLoginSubmitForm={this.handleLoginSubmit}
                            loginPutErrorMessage={this.state.loginErrorMessage}
                            loginSuccessMessage={this.state.loginSuccessMessage}
                        />
                    ) }/>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
