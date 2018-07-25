// ./src/components/sigin/SigninPage.js
import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import SignInForm from './SignInForm';
import * as actions from '../../actions/loginActions';
import { deleteResponseMessages } from '../../actions/responseMessage';

export class SignInPage extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.handleLoginInputChange = this.handleLoginInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    // event handler for login input change
    handleLoginInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

     // event handler for login form onSubmit event
    handleLoginSubmit(event) {
        event.preventDefault();
        const input = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.doLogin(input);
    }

    // executed just before the component gets removed from the DOM
    componentWillUnmount() {

        // delete any flash message on responseMessage props
        this.props.deleteMessage();
    }

    // renders JSX content
    render () {
        return (
            <div>
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 com-xs-12">
                                <SignInForm
                                    handleLoginInputChange={this.handleLoginInputChange}
                                    handleLoginSubmitForm={this.handleLoginSubmit}
                                    loginMessage={this.props.loginResponse.response_message}
                                    statusCode={this.props.loginResponse.status_code}
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
const mapStateToProps = (state, ownProps) => {
    return { loginResponse: state.messages };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: () => dispatch(deleteResponseMessages()),
        doLogin: loginInput => dispatch(actions.doLogin(loginInput))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
