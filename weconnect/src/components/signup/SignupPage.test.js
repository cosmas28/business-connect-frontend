import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import SignUpPage from './SignupPage';

describe('Sign up Page', () => {
    it('renders signup page without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SignUpPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
