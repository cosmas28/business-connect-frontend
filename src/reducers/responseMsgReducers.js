// ./src/reducers/businessReducers.js

/**
 *
 * @param {Array} currentState - current store state of messages object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of messages object
 */
export const responseMessageReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'ADD_RESPONSE_MESSAGE':
            return action.message;
        case 'DELETE_RESPONSE_MESSAGE':
            for (const key in currentState) {
                delete currentState[key];
            }

            return currentState;
        default:
            return currentState;
    }
};
