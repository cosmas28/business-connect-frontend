// ./src/components/resetPassword/ResetPasswordPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/resetPasswordActions';

import AuthLayout from '../AuthLayout';
import InputBox from '../InputBox';
import Button from '../Button';


export class ResetPasswordPage extends React.Component {

    /**
     *
     * @param {Object} props - passed properties from store
     */
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.token = this.props.match.params.token;
    }

    // event handler for reset password form input change
    handleInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    // event handler for reset password form onSubmit event
    handleFormSubmit(event) {
        event.preventDefault();
        const input = {
            confirm_password: this.state.confirm_password,
            password: this.state.password
        };
        this.props.resetPassword(this.token, input);
    }

    // renders JSX content
    render() {
        return (
            <AuthLayout
                header="Reset Password"
                linkLabel="Back to Sign in"
                linkUrl="/login"
            >
                <InputBox
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <InputBox
                    type="password"
                    name="confirm_assword"
                    placeholder="Confirm Password"
                />
                <div className="form-item">
                    <Button
                        typeColor="primary"
                        label="Reset"
                    />
                </div>
            </AuthLayout>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return { response: state.resetPassword };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return { resetPassword: (token, inputData) => dispatch(actions.resetPassword(token, inputData)) };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
