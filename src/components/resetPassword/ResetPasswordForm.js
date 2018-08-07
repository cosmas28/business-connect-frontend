// ./src/components/resetPassword/ResetPasswordForm.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
const ResetPasswordForm = props => {
    return (
        <form onSubmit={props.handleResetPasswordSubmitForm}>
            <div className="form-input-division">
                <input type="password"
                        id="password"
                        name="password"
                        className="form-text-input form-control test" placeholder="New password"
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
    );
};

// define prop types for AddBusinessForm
ResetPasswordForm.protoTypes = {
    'handleResetPasswordInputChange': PropTypes.func.isRequired,
    'handleResetPasswordSubmitForm': PropTypes.func.isRequired
};

export default ResetPasswordForm;
