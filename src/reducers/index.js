import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';
import {
    businessesReducer,
    userBusinessReducer,
    registerBusinessReducer,
    businessReducer,
    deleteBusinessReducer
} from './businessesReducers';
import { confirmEmailReducer, resetPasswordReducer } from './resetPasswordReducers';

export default combineReducers({
    business: businessReducer,
    businessDelete: deleteBusinessReducer,
    businesses: businessesReducer,
    login: loginReducer,
    mail: confirmEmailReducer,
    registerBusiness: registerBusinessReducer,
    resetPassword: resetPasswordReducer,
    user: registerUserReducer,
    userBusinesses: userBusinessReducer
});
