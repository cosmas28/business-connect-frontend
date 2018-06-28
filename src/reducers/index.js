import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';
import { loginReducer } from './loginReducers';

export default combineReducers({
    user: registerUserReducer,
    login: loginReducer
})