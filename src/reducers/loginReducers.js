export const loginReducer = (currentState = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.loginResponse;
        case 'LOGIN_FAILED':
            return action.loginError;
        default:
            return currentState;
    }
};
