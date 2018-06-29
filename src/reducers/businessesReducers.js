export const businessesReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BUSINESSES_SUCCESS':
            return action.businesses;
        default:
            return currentState;
    }
};

export const registerBusinessReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'REGISTER_BUSINESS_SUCCESS':
            return action.message;
        case 'REGISTER_BUSINESS_FAILED':
            return action.error;
        default:
            return currentState;
    }
};

export const userBusinessReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_BUSINESSES_BY_USER_ID':
            return action.userBusinesses;
        default:
            return currentState;
    }
};