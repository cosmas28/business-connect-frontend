export const registerUserReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            return action.user;
        case 'REGISTER_USER_FAILED':
            return action.error;
        default:
            return currentState;
    }
};
