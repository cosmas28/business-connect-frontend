import axios from "axios";
import history from "../helpers/history";
import { showToast } from "./showToast";

const apiUrl = process.env.REACT_APP_API_URL + "/auth/login";

export const doLogin = loginInput => dispatch => {
  return axios
    .post(apiUrl, loginInput)
    .then(response => {
      if (response.data.status_code === 200) {
        dispatch(showToast(response.data.response_message, "success"));
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("accessToken", response.data.access_token);
        sessionStorage.setItem("userId", response.data.user_id);
        history.push("/dashboard");
      } else {
        dispatch(
          showToast("Invalid email or password. Please try again!", "failure")
        );
      }
    })
    .catch(error => {
      if (error.response) {
        dispatch(showToast(error.response.data.response_message, "failure"));
      }
    });
};
