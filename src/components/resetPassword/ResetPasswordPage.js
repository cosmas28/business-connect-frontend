import React from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';
import * as actions from '../../actions/resetPasswordActions';
import Header from '../common/Header';


class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.token = this.props.match.params.token;
    }

    handleInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const input = {
            confirm_password: this.state.confirm_password,
            password: this.state.password
        };
        this.props.resetPassword(this.token, input);
    }

    render() {
        return (
            <div>
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <ResetPasswordForm
                                    responseMessage={this.props.response.response_message}
                                    statusCode={this.props.response.status_code}
                                    handleResetPasswordInputChange={this.handleInputChange}
                                    handleResetPasswordSubmitForm={this.handleFormSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
