import React from 'react';
import axios from 'axios';
import Home from './Home';
import SignUpForm from './SignupForm';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'message': '' };
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/register';
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(input) {
        axios.post(this.apiUrl, input).then(response => {
            if (response.status === 201) {
                this.setState({ 'message': response.data.message });
            } else {
                this.setState({ 'message': response.data.message });
            }
        });
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <Home/>
                        <SignUpForm registerUser={this.registerUser} message={this.state.message}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default SignUpPage;
