import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import axios from "axios/index";

class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'ErrorMessage': '',
            'SuccessMessage': ''
        };
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/reset_password';
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const input = {
            'email': this.state.email,
            'password': this.state.password,
            'confirm_password': this.state.confirm_password
        };
        axios.post(this.apiUrl, input).then(response => {
            this.setState({
                'SuccessMessage': response.data.response_message,
                'email': '',
                'password': '',
                'confirm_password': ''
            });
        }).catch((error) => {
            if (error.response) {
                this.setState({ 'ErrorMessage': error.response.data.response_message });
            }
        });
    };

    render(){
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <ResetPasswordForm
                                ResetPasswordPutErrorMessage={this.state.ErrorMessage}
                                ResetPasswordSuccessMessage={this.state.SuccessMessage}
                                handleResetPasswordInputChange={this.handleInputChange}
                                handleResetPasswordSubmitForm={this.handleFormSubmit}
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ResetPasswordPage;
