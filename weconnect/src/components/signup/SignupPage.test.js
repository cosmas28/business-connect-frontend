import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from './SignupPage';

describe('Sign up Page', () => {
    const component = shallow(
        <SignUpPage />
        );
    it('renders signup page without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('rendered `Home` component does not receive any props', () => {
        const homeDisplay = component.find('Home');
        expect(Object.keys(homeDisplay.props()).length).toBe(0);
    });

    it('rendered `Home` component does not receive any props', () => {
        const signupFormDisplay = component.find('SignUpForm');
        expect(Object.keys(signupFormDisplay.props()).length).toBe(3);
    });
});
