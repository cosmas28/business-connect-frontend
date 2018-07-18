import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Home from './Home';
import SignUpForm from './SignupForm';
import * as signupActions from '../../actions/signupActions';
import { deleteResponseMessages } from '../../actions/responseMessage';

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.newUserSubmitHandler = this.newUserSubmitHandler.bind(this);
    }

    handleInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    newUserSubmitHandler(event) {
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
    }

    componentWillUnmount() {
        this.props.deleteMessage();
    }

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
                                outPutMessage={this.props.response.message}
                                statusCode={this.props.response.status_code}
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

// Maps state from store to props
export const mapStateToProps = (state, ownProps) => {
    return { response: state.messages };
};

// Maps actions to props
export const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: () => dispatch(deleteResponseMessages()),
        registerUser: user => dispatch(signupActions.registerUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
