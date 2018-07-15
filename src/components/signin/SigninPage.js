import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import SignInForm from './SignInForm';
import * as actions from '../../actions/loginActions';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginInputChange = this.handleLoginInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        const input = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.doLogin(input).then(() => {
            this.props.history.push('/dashboard');
        });
    }

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
    return { loginResponse: state.login };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return { doLogin: loginInput => dispatch(actions.doLogin(loginInput)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
