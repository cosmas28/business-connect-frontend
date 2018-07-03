import React from 'react';
import PropTypes from 'prop-types';

const ResetPasswordForm = props => {
    let responseMessage = null;
    if (props.ResetPasswordSuccessMessage) {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.ResetPasswordSuccessMessage}
        </div>;
    } else if (props.ResetPasswordPutErrorMessage) {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.ResetPasswordPutErrorMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    }

    return (
        <div className="main-login-page">
            <p>Reset your password</p>
            {responseMessage}
            <form onSubmit={props.handleResetPasswordSubmitForm}>
                <div className="form-input-division">
                    <input type="email"
                           name="email"
                           className="form-text-input form-control"
                           placeholder="Email"
                           onChange={props.handleResetPasswordInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           id="password"
                           name="password"
                           className="form-text-input form-control" placeholder="New password"
                           onChange={props.handleResetPasswordInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <input type="password"
                           name="confirm_password"
                           className="form-text-input form-control"
                           placeholder="Confirm password"
                           onChange={props.handleResetPasswordInputChange}
                           required
                    />
                </div>
                <div className="form-input-division">
                    <button type="submit" className="btn btn-primary input-default form-btn">Reset password</button>
                </div>
            </form>
        </div>
    );
};

ResetPasswordForm.protoTypes = {
    'ResetPasswordPutErrorMessage': PropTypes.string,
    'ResetPasswordSuccessMessage': PropTypes.string,
    'handleResetPasswordInputChange': PropTypes.func.isRequired,
    'handleResetPasswordSubmitForm': PropTypes.func.isRequired
};

export default ResetPasswordForm;
