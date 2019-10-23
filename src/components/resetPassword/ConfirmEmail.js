// ./src/components/resetPassword/ConfirmEmail.js
import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/resetPasswordActions";

import AuthLayout from "../AuthLayout";
import InputBox from "../InputBox";
import Button from "../Button";

export class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  // event handler for reset password email confirmation form input change
  handleInputChange = event => this.setState({ email: event.target.value });

  // event handler for reset password email confirmation form onSubmit event
  handleOnSubmit = event => {
    event.preventDefault();
    const input = {
      email: this.state.email,
      url: process.env.REACT_APP_PASSWORD_RESET_URL
    };

    this.props.doConfirmEmail(input);
  };

  // renders JSX content
  render() {
    return (
      <AuthLayout
        header="Confirm Email"
        linkLabel="Back to Sign in"
        linkUrl="/login"
      >
        <InputBox
          type="email"
          name="email"
          placeholder="Your Email"
          handleOnChange={this.handleInputChange}
        />
        <div className="form-item">
          <Button
            typeColor="primary"
            label="Send Reset Link"
            handleOnClick={this.handleOnSubmit}
          />
        </div>
      </AuthLayout>
    );
  }
}

// Maps state from store to props
const mapStateToProps = state => {
  return { response: state.messages };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    doConfirmEmail: userInput => dispatch(actions.confirmEmail(userInput))
  };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmEmail);
