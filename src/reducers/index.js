import { combineReducers } from 'redux';
import { registerUserReducer } from './registerUserReducers';

export default combineReducers({
    user: registerUserReducer
})