import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignupForm';

it('renders home page text without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUpForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});
