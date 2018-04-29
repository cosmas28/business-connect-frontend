import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = props => {
    return (
        <div className="main-login-page">
            <h2>Sign in to your account</h2>
            <form>
                <div className="form-input-division">
                    <input type="text" id="username" name="username" className="input-default form-text-input" placeholder="Username" />
                </div>
                <div className="form-input-division">
                    <input type="password" id="password" name="password" className="input-default form-text-input" placeholder="Password" />
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

export default SignInForm;
