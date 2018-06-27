import { createBrowserHistory } from 'history';
import store from '../store/configureStore.dev';
import * as actions from '../actions/actionTypes';

export const clearError = () => {
    return {
        type: actions.CLEAR_ERROR
    }
};

const history = createBrowserHistory();
history.listen((location, action) => {
    store.dispatch(clearError());
});

export default history;
