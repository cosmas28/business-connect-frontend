import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = props => {
    let responseMessage = null;
    if (props.outPutSuccessMessage) {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.outPutSuccessMessage}
        </div>;
    } else if (props.outPutErrorMessage) {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.outPutErrorMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    } else {
        responseMessage = null;
    }

    return (
        <div className="col-md-6 col-sm-12 col-xs-12 offset-md-2">
            <h2>Sign up to register a business</h2>
            {responseMessage}
            <form onSubmit={props.handleSubmitForm}>
                <div className="row">
                    <div className="col">
                        <input type="email"
                               name="email"
                               className="test input-default form-text-input"
                               placeholder="Email Address"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="input-default form-text-input"
                               placeholder="Username"
                               name="username"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <input type="text"
                               className="input-default form-text-input"
                               placeholder="First name"
                               name="first_name"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="input-default form-text-input"
                               placeholder="Last name"
                               name="last_name"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                </div>
                <hr/>
                <div className="form-input-division">
                    <input type="password"
                           className="input-default form-text-input"
                           placeholder="Password"
                           name="password"
                           onChange={props.handleInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           className="input-default form-text-input"
                           placeholder="Confirm password"
                           name="confirm_password"
                           onChange={props.handleInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <button type="submit" className="btn btn-primary input-default form-btn">Sign Up</button>
                </div>
                <div className="form-input-division">
                    <a href="">You have an account?</a>
                </div>
            </form>
        </div>
    );
};

SignUpForm.propTypes = {
    'handleInputChange': PropTypes.func.isRequired,
    'handleSubmitForm': PropTypes.func.isRequired,
    'outPutErrorMessage': PropTypes.string,
    'outPutSuccessMessage': PropTypes.string
};

export default SignUpForm;
