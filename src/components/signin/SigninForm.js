import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = props => {
    let responseMessage = null;
    if (props.loginSuccessMessage) {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.loginSuccessMessage}
        </div>;
    } else if (props.loginPutErrorMessage) {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.loginPutErrorMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    }

    return (
        <div className="main-login-page">
            <h2>Sign in to your account</h2>
            {responseMessage}
            <form onSubmit={props.handleLoginSubmitForm}>
                <div className="form-input-division">
                    <input type="email"
                           name="email"
                           className="input-default form-text-input"
                           placeholder="Email"
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
                        <a href="/">You don't have an account? </a>
                    </div>
            </form>
        </div>
    );
};

SignInForm.propTypes = {
    'handleLoginInputChange': PropTypes.func.isRequired,
    'handleLoginSubmitForm': PropTypes.func.isRequired,
    'loginPutErrorMessage': PropTypes.string,
    'loginSuccessMessage': PropTypes.string
};

export default SignInForm;
