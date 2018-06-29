export const businessesReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BUSINESSES_SUCCESS':
            return action.businesses;
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