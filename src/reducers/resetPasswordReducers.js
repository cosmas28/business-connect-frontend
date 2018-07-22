// ./src/reducers/resetPasswordReducers.js

/**
 *
 * @param {Array} currentState - current store state of mail object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of mail object
 */
export const confirmEmailReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'CONFIRM_EMAIL_SUCCESS':
            return action.message;
        case 'CONFIRM_EMAIL_FAIL':
            return action.error;
        default:
            return currentState;
    }
};

/**
 *
 * @param {Array} currentState - current store state of resetPassword object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of resetPassword object
 */
export const resetPasswordReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'RESET_PASSWORD_SUCCESS':
            return action.message;
        case 'RESET_PASSWORD_FAIL':
            return action.error;
        default:
            return currentState;
    }
};
