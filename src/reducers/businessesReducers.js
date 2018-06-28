export const businessesReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BUSINESSES_SUCCESS':
            return action.businesses;
        default:
            return currentState;
    }
};