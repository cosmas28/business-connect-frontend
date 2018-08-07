// ./src/components/resetPassword/ConfirmEmail.js
import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import AlertMessage from '../common/AlertMessage';
import * as actions from '../../actions/resetPasswordActions';

export class ConfirmEmail extends React.Component {

    /**
     *
     * @param {Object} props - passed properties from the store
     */
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // event handler for reset password email confirmation form input change
    onInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    // event handler for reset password email confirmation form onSubmit event
    onSubmit(event) {
        event.preventDefault();
        const input = {
            email: this.state.email,
            url: process.env.REACT_APP_PASSWORD_RESET_URL
        };
        this.props.doConfirmEmail(input);
    }

    // renders JSX content
    render() {
        return (
            <div>
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 com-xs-12">
                                <div className="main-login-page">
                                    <p>Confirm your email address</p>
                                    <AlertMessage
                                        alertMessage={this.props.response.response_message}
                                        statusCode={this.props.response.status_code}
                                    />
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-input-division">
                                            <input type="email"
                                                name="email"
                                                className="form-text-input form-control"
                                                placeholder="Email"
                                                onChange={this.onInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-input-division">
                                            <button type="submit" className="btn btn-primary input-default form-btn">Send</button>
                                        </div>
                                    </form>
                                </div>
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
    return { response: state.messages };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return { doConfirmEmail: userInput => dispatch(actions.confirmEmail(userInput)) };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);

