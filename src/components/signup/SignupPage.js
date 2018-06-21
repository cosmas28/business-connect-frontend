import React from 'react';
import axios from 'axios';
import Home from './Home';
import SignUpForm from './SignupForm';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            successMessage: '',
            errorMessage: ''
        };
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/register';
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    newUserSubmitHandler = event => {
        event.preventDefault();
        const input = {
            confirm_password: this.state.confirm_password,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.password,
            username: this.state.username
        };
        axios.post(this.apiUrl, input).then(response => {
            this.setState({ successMessage: response.data.message });
            event.target.reset();
        }).catch((error) => {
            if (error.response) {
                this.setState({ errorMessage: error.response.data.message });
            }
        });
    };

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <Home/>
                        <SignUpForm
                            handleInputChange={this.handleInputChange}
                            handleSubmitForm={this.newUserSubmitHandler}
                            outPutSuccessMessage={this.state.successMessage}
                            outPutErrorMessage={this.state.errorMessage}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default SignUpPage;
