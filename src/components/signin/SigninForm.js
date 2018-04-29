import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = props => {
    return (
        <div className="main-login-page">
            <h2>Sign in to your account</h2>
            <form onSubmit={props.handleLoginSubmitForm}>
                <div className="form-input-division">
                    <input type="text"
                           name="username"
                           className="input-default form-text-input"
                           placeholder="Username"
                           onChange={props.handleLoginInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           id="password"
                           name="password"
                           className="test input-default form-text-input"
                           placeholder="Password"
                           onChange={props.handleLoginInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <button type="submit" className="btn btn-primary input-default form-btn">Sign In</button>
                </div>
                <div className="form-input-division">
                    <a href="">Forgot password?</a>
                </div>
                <hr />
                    <div className="form-input-division">
                        <a href="">You don't have an account? </a>
                    </div>
            </form>
        </div>
    );
};

SignInForm.propTypes = {
    'handleLoginInputChange': PropTypes.func.isRequired,
    'handleLoginSubmitForm': PropTypes.func.isRequired
};

export default SignInForm;
