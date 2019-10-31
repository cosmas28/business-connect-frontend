// ./src/actions/signupActions.js
import axios from "axios";
import history from "../helpers/history";
import { showToast } from "./showToast";

// API URL
const apiUrl = process.env.REACT_APP_API_URL + "/auth/register";

export const registerUser = user => dispatch => {
  return axios
    .post(apiUrl, user)
    .then(response => {
      dispatch(showToast(response.data.message, "success"));
      history.push("/login");
    })
    .catch(error => {
      dispatch(showToast(error.response.data.message, "failure"));
    });
};
