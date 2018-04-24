import React from 'react';
import Home from './Home';
import SignUpForm from './SignupForm';

class SignUpPage extends React.Component {
    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <Home/>
                        <SignUpForm/>
                    </div>
                </div>
            </main>
        );
    }
}

export default SignUpPage;