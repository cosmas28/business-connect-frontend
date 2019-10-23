// ./src/actions/resetPasswordActions.js
import axios from "axios";
import history from "../helpers/history";
import { showToast } from "./showToast";

// API URL
const apiUrl = process.env.REACT_APP_API_URL + "/auth/reset_password/";

export const confirmEmail = userInput => {
  return dispatch => {
    return axios
      .post(apiUrl + "confirm_email", userInput)
      .then(response => {
        if (response.data.status_code === 200) {
          dispatch(showToast(response.data.response_message, "success"));
        } else {
          dispatch(showToast(response.data.response_message, "failure"));
        }
      })
      .catch(error => {
        if (error.response) {
          dispatch(showToast(error.response.data));
        }
      });
  };
};

export const resetPassword = (accessToken, inputData) => {
  return dispatch => {
    return axios
      .post(apiUrl + accessToken, inputData)
      .then(response => {
        if (response.data.status_code === 200) {
          dispatch(showToast(response.data.response_message, "success"));
          history.push("/login");
        } else {
          dispatch(showToast(response.data.response_message, "failure"));
        }
      })
      .catch(error => {
        if (error.response) {
          dispatch(showToast(error.response.data.response_message, "failure"));
        }
      });
  };
};
