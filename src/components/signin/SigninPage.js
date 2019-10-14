// ./src/components/sigin/SigninPage.js
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/loginActions';
import { deleteResponseMessages } from '../../actions/showToast';

import AuthLayout from '../AuthLayout';
import InputBox from '../InputBox';
import Button from '../Button';
import LinkButton from '../LinkButton';

import './SigninPage.css';

export class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    // event handler for login input change
    handleLoginInputChange = event => {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

     // event handler for login form onSubmit event
    handleLoginSubmit = (event) => {
        event.preventDefault();
        const input = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.doLogin(input);
    }

    // renders JSX content
    render () {
        return (
            <AuthLayout
                footer="You don't have an Account?"
                header="Sign In"
                linkLabel="Create Account"
                linkUrl="/"
            >
                <InputBox
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    handleOnChange={this.handleLoginInputChange}
                />
                <InputBox
                    type="password"
                    name="password"
                    placeholder="Password"
                    handleOnChange={this.handleLoginInputChange}
                />
                <div className="secondary-item">
                    <div className="remember-me">
                        <div className="checkbox-wrap">
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-label">Remember me</div>
                    </div>
                    <div className="forgot-password">
                        <LinkButton
                            label="Forgot Password?"
                            url="/reset_password/confirm_email"
                            size="small"
                        />
                    </div>
                </div>
                <div className="form-item">
                    <Button
                        typeColor="primary"
                        label="Sign in"
                        handleOnClick={this.handleLoginSubmit}
                    />
                </div>
            </AuthLayout>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return { loginResponse: state.messages };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: () => dispatch(deleteResponseMessages()),
        doLogin: loginInput => dispatch(actions.doLogin(loginInput))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
