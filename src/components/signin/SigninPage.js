import React from 'react';
import axios from "axios";
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../common/Header';
import SignInForm from './SignInForm';
import * as actions from '../../actions/loginActions';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginInputChange = this.handleLoginInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
        this.props.doLogin(input);
    };

    render () {
        const loggedIn = sessionStorage.getItem('loggedIn');
        let isRedirect = null;
        if (loggedIn) {
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
                                    // loginPutErrorMessage={this.props.loginResponse}
                                    loginMessage={this.props.loginResponse}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

//Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        loginResponse: state.login.response_message,
    }
}

//Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: loginInput => dispatch(actions.doLogin(loginInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
