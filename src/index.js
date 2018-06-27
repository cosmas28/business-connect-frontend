import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore.dev';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
