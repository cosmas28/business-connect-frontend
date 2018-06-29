import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';
import { businessesReducer, userBusinessReducer, registerBusinessReducer } from './businessesReducers';

export default combineReducers({
    businesses: businessesReducer,
    login: loginReducer,
    registerBusiness: registerBusinessReducer,
    user: registerUserReducer,
    userBusinesses: userBusinessReducer
});
