import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import * as actions from '../../actions/resetPasswordActions';

class ConfirmEmail extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        const object = event.target;
        const { name: key, value: v } = object;
        this.setState({ [key]: v });
    }

    onSubmit(event) {
        event.preventDefault();
        const input = {
            email: this.state.email,
            url: 'http://localhost:3000/reset_password/password'
        };
        this.props.doConfirmEmail(input);
    }

    render() {
        let responseMessage = null;
        if (this.props.status_code === 200) {
            responseMessage = <div className="alert alert-success alert-dismissible fade show" role="alert">
                Check your email to confirm your account!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>;
        } else {
            responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error</strong> {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>;
        }

        return (
            <div>
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 com-xs-12">
                                <div className="main-login-page">
                                    <p>Confirm your email address</p>
                                    {this.props.message &&
                                        responseMessage
                                    }
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
                                        {/* <div className="form-input-division">
                                            <input type="hidden"
                                                name="url"
                                                value="http://localhost:3000/reset_password"
                                                className="form-text-input form-control"
                                                onChange={this.onInputChange}
                                            />
                                        </div> */}
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
    return {
        message: state.mail.response_message,
        status_code: state.mail.status_code
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return { doConfirmEmail: userInput => dispatch(actions.confirmEmail(userInput)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);

