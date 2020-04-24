// ./src/components/signup/SignupPage.js
import React from "react";
import { connect } from "react-redux";
import * as signupActions from "../../actions/signupActions";

import AuthLayout from "../AuthLayout";
import InputBox from "../InputBox";
import Button from "../Button";

import {
  authFields,
  isAllValid,
  isAllFilled,
  validateEmail,
  validateConfirmPwd,
  validatePassword,
  validateText
} from "../../helpers/validators";

import "./SignupPage.css";

export class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      email_error: "",
      password: "",
      password_error: "",
      username: "",
      username_error: ""
    };
  }

  handleInputChange = event => {
    const object = event.target;
    const { name: key, value: v } = object;
    this.setState({ [key]: v }, () => {
      this.validateInput(key)();
    });
  };

  validateInput = name => () => {
    const value = this.state[name];
    let errorMessage = "";
    if (value === "") {
      this.setState({
        [`${name}_error`]:
          value.length < 1 ? `Your ${authFields[name]} is required` : ""
      });

      return;
    }

    if (name === "email") {
      errorMessage = validateEmail(value);
    }

    this.setState({
      [`${name}_error`]: errorMessage
    });
  };

  hanldeOnClickButton = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    const userInput = {
      email: email,
      password: password,
      username: username
    };

    if (isAllFilled(userInput)) {
      this.props.registerUser(userInput);
    } else {
      this.setState({
        email_error: "Email is required",
        username_error: "Username is required",
        password_error: "Password is required"
      });
    }
  };

  render() {
    const { email_error, username_error, password_error } = this.state;
    const allValid = isAllValid([email_error, username_error, password_error]);

    return (
      <AuthLayout
        footer="You already have an Account?"
        header="Create Account"
        linkLabel="Sign in"
        linkUrl="/login"
      >
        <InputBox
          type="email"
          name="email"
          placeholder="Your Email"
          errorMessage={email_error}
          handleOnChange={this.handleInputChange}
          handleOnBlur={this.validateInput("email")}
        />
        <InputBox
          type="text"
          name="username"
          placeholder="Your Username"
          errorMessage={username_error}
          handleOnChange={this.handleInputChange}
          handleOnBlur={this.validateInput("username")}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="Password"
          errorMessage={password_error}
          handleOnChange={this.handleInputChange}
          handleOnBlur={this.validateInput("password")}
        />
        <div className="form-item">
          <Button
            typeColor="primary"
            label="Create"
            disabled={!allValid ? "disabled" : ""}
            handleOnClick={this.hanldeOnClickButton}
          />
        </div>
      </AuthLayout>
    );
  }
}

// Maps state from store to props
export const mapStateToProps = (state, ownProps) => {
  return { response: state.messages };
};

// Maps actions to props
export const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(signupActions.registerUser(user))
  };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
