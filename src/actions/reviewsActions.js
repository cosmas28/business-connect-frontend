// ./src/actions/reviewsActions
import axios from "axios";
import { showToast } from "./showToast";
import history from "../helpers/history";

// API URL
const apiUrl = process.env.REACT_APP_API_URL + "/businesses";

/**
 *
 * @param {string} accessToken - API authorization access token
 * @param {number} businessId - unique business id
 * @param {Object} inputData - a business review
 * @returns {Function} returns a function that takes dispatch as its only argument and dispatches an action when the promise resolves
 */
export const addReviews = (accessToken, businessId, inputData) => {
  return dispatch => {
    return axios
      .post(apiUrl + "/" + businessId + "/reviews", inputData, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          history.push("/businesses/" + businessId);
        } else {
          dispatch(showToast(response.data));
        }
      })
      .catch(error => {
        if (error.response) {
          dispatch(showToast(error.response.data));
        }
      });
  };
};
