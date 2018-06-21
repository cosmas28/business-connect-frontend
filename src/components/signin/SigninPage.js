import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignInPage = props => {
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
        <main className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 com-xs-12">
                        <div className="main-login-page">
                            <p>Sign in to your account</p>
                            {responseMessage}
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
                                    <Link className="nav-link" to="/reset_password">Forgot password?</Link>
                                </div>
                                <hr />
                                <div className="form-input-division">
                                    <Link className="nav-link" to="/">You don't have an account?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

SignInPage.propTypes = {
    'handleLoginInputChange': PropTypes.func.isRequired,
    'handleLoginSubmitForm': PropTypes.func.isRequired,
    'loginPutErrorMessage': PropTypes.string,
    'loginSuccessMessage': PropTypes.string
};

export default SignInPage;
