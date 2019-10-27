// ./src/actions/responseMessage.js
import * as actionTypes from "./actionTypes";

/**
 *
 * @param {string} message - main message
 * @param {string} status - success or failure status
 * @return {Object} - an object of success message and action type
 */
export const showToast = (message, status) => ({
  message,
  status,
  type: actionTypes.ADD_RESPONSE_MESSAGE
});

/**
 * @returns {Object} - an object containing action type
 */
export const deleteResponseMessages = () => {
  return { type: actionTypes.DELETE_RESPONSE_MESSAGE };
};
