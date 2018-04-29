import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from './SigninForm';

const SignInPage = props => {
    return(
        <main className="main-content">
            <div className="container">
                <div className="row">
                    <SignInForm
                        handleLoginInputChange={props.handleLoginInputChange}
                        handleLoginSubmitForm={props.handleLoginSubmitForm}
                        loginPutErrorMessage={props.loginPutErrorMessage}
                        loginSuccessMessage={props.loginSuccessMessage}
                    />
                </div>
            </div>
        </main>
    );
};

SignInForm.propTypes = {
    'handleLoginInputChange': PropTypes.func.isRequired,
    'handleLoginSubmitForm': PropTypes.func.isRequired,
    'loginPutErrorMessage': PropTypes.string,
    'loginSuccessMessage': PropTypes.string
};

export default SignInPage;
