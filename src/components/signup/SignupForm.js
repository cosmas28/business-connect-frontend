// ./src/components/signup/SignupForm.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
const SignUpForm = props => {

    // display flash message if it exists
    let responseMessage = null;
    if (props.statusCode === 201) {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.outPutMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    } else {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.outPutMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    }

    return (
        <div className="col-md-6 col-sm-12 col-xs-12 offset-md-2">
            <p>Sign up to register a business</p>
            {props.outPutMessage &&
                responseMessage
            }
            <form onSubmit={props.handleSubmitForm}>
                <div className="row">
                    <div className="col">
                        <input type="email"
                               name="email"
                               className="test form-text-input form-control"
                               placeholder="Email Address"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="form-text-input form-control"
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
                               className="form-text-input form-control"
                               placeholder="First name"
                               name="first_name"
                               onChange={props.handleInputChange}
                               required
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="form-text-input form-control"
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
                           className="form-text-input form-control"
                           placeholder="Password"
                           name="password"
                           onChange={props.handleInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           className="form-text-input form-control"
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
                    <Link className="nav-link" to="/login">You have an account?</Link>
                </div>
            </form>
        </div>
    );
};

// define prop types for SignUpForm
SignUpForm.propTypes = {
    'handleInputChange': PropTypes.func.isRequired,
    'handleSubmitForm': PropTypes.func.isRequired,
    'outPutMessage': PropTypes.string,
    'statusCode': PropTypes.number
};

export default SignUpForm;
