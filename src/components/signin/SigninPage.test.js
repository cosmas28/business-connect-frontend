import React from 'react';
import SignInPage from './SigninPage';

describe('Sign in page', () => {
    const component = shallow(
        <SignInPage />
    );
    it('renders sign in page without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('rendered `SignInForm` component receive four props', () => {
        const signupFormDisplay = component.find('SignInForm');
        expect(Object.keys(signupFormDisplay.props()).length).toBe(4);
    });
});
