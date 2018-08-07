// ./src/components/sigin/SignInForm.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
const SignInForm = props => {
    return (
        <form onSubmit={props.handleLoginSubmitForm}>
            <div className="form-input-division">
                <input type="email"
                    name="email"
                    className="form-text-input form-control"
                    placeholder="Email"
                    onChange={props.handleLoginInputChange}
                    required
                />
            </div>
            <div className="form-input-division">
                <input type="password"
                    id="password"
                    name="password"
                    className="test form-text-input form-control"
                    placeholder="Password"
                    onChange={props.handleLoginInputChange}
                    required
                />
            </div>
            <div className="form-input-division">
                <button type="submit" className="btn btn-primary input-default form-btn">Sign In</button>
            </div>
            <div className="form-input-division">
                <Link className="nav-link" to="/reset_password/confirm_email">Forgot password?</Link>
            </div>
            <hr />
            <div className="form-input-division">
                <Link className="nav-link" to="/">You don't have an account?</Link>
            </div>
        </form>
    );
};

// define prop types for SignInForm
SignInForm.propTypes = {
    'handleLoginInputChange': PropTypes.func.isRequired,
    'handleLoginSubmitForm': PropTypes.func.isRequired
};

export default SignInForm;
