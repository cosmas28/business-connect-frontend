import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import SignUpPage from './SignupPage';

describe('Sign up Page', () => {
    const mockRegisterUser = jest.fn();
    const component = shallow(
        <SignUpPage />
        );
    it('renders signup page without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
