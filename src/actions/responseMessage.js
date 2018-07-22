// ./src/actions/responseMessage.js
import * as actionTypes from './actionTypes';

/**
 *
 * @param {Object} message - an object of success message and status code
 * @return {Object} - an object of success message and action type
 */
export const addResponseMessage = message => {
    return {
        message,
        type: actionTypes.ADD_RESPONSE_MESSAGE
    };
};

/**
 * @returns {Object} - an object containing action type
 */
export const deleteResponseMessages = () => {
    return { type: actionTypes.DELETE_RESPONSE_MESSAGE };
};
