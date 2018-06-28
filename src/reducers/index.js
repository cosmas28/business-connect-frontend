import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';
import { businessesReducer } from './businessesReducers';

export default combineReducers({
    user: registerUserReducer,
    login: loginReducer,
    businesses: businessesReducer
})