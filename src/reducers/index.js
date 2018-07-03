import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';
import { businessesReducer, userBusinessReducer, registerBusinessReducer } from './businessesReducers';
import { confirmEmailReducer } from './resetPasswordReducers';

export default combineReducers({
    businesses: businessesReducer,
    mail: confirmEmailReducer,
    login: loginReducer,
    registerBusiness: registerBusinessReducer,
    user: registerUserReducer,
    userBusinesses: userBusinessReducer
});
