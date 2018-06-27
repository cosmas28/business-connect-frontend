import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-redux';
import Header from '../common/Header';
import Home from './Home';
import SignUpForm from './SignupForm';
import * as signupActions from '../../actions/signupActions';

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.newUserSubmitHandler = this.newUserSubmitHandler.bind(this);
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
        this.props.registerUser(input);
    };

    render() {
        return (
            <div>
                <Header />
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <Home/>
                            <SignUpForm
                                handleInputChange={this.handleInputChange}
                                handleSubmitForm={this.newUserSubmitHandler}
                                outPutSuccessMessage={this.props.user}
                                outPutErrorMessage={this.props.error}
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

//Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        error: state.error
    }
}

//Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: user => dispatch(signupActions.registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
