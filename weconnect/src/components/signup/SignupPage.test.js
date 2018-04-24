import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from './SignupPage';

it('renders signup page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUpPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
