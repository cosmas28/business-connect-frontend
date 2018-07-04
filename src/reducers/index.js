import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';
import { businessesReducer, userBusinessReducer, registerBusinessReducer } from './businessesReducers';
import { confirmEmailReducer, resetPasswordReducer } from './resetPasswordReducers';

export default combineReducers({
    businesses: businessesReducer,
    login: loginReducer,
    mail: confirmEmailReducer,
    registerBusiness: registerBusinessReducer,
    resetPassword: resetPasswordReducer,
    user: registerUserReducer,
    userBusinesses: userBusinessReducer
});
