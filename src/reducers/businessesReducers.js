// ./src/reducers/businessReducers.js

/**
 *
 * @param {Array} currentState - current store state of businesses object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of businesses object
 */
export const businessesReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BUSINESSES_SUCCESS':
            return action.businesses;

        case 'FETCH_ALL_BUSINESSES_FAIL':
            return action.error;
        default:
            return currentState;
    }
};

/**
 *
 * @param {Object} currentState - current store state of business object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of business object
 */
export const businessReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'FETCH_BUSINESSES_BY_ID_SUCCESS':
            return action.business;
        case 'FETCH_BUSINESSES_BY_ID_FAIL':
            return action.error;
        default:
            return currentState;
    }
};

/**
 *
 * @param {Array} currentState - current store state of userBusinesses object
 * @param {string} action - a store dispatched action type
 * @returns {Array} - next store state of userBusinesses object
 */
export const userBusinessReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_BUSINESSES_BY_USER_ID_SUCCESS':
            return action.userBusinesses;
        case 'FETCH_BUSINESSES_BY_USER_ID_FAIL':
            return action.error;
        default:
            return currentState;
    }
};
