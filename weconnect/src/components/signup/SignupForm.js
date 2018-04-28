import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = props => {
    return (
        <div className="col-md-6 col-sm-12 col-xs-12 offset-md-2">
            <h2>Sign up to register a business</h2>
            <article className="alert alert-success" role="alert">
                {props.outPutMessage}
            </article>
            <form onSubmit={props.handleSubmitForm}>
                <div className="row">
                    <div className="col">
                        <input type="email"
                               name="email"
                               className="input-default form-text-input"
                               placeholder="Email Address"
                               onChange={props.handleInputChange}
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="input-default form-text-input"
                               placeholder="Username"
                               name="username"
                               onChange={props.handleInputChange}
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
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="input-default form-text-input"
                               placeholder="Last name"
                               name="last_name"
                               onChange={props.handleInputChange}
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
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           className="input-default form-text-input"
                           placeholder="Confirm password"
                           name="confirm_password"
                           onChange={props.handleInputChange}
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
    'outPutMessage': PropTypes.string.isRequired
};

export default SignUpForm;
