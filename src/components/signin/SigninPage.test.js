import React from 'react';
import SignInPage from './SigninPage';

describe('Sign in page', () => {
    const mockHandleSubmitForm = jest.fn(),
        mockInputChange = jest.fn();
    const component = shallow(
        <SignInPage
            handleLoginInputChange={mockInputChange}
            handleLoginSubmitForm={mockHandleSubmitForm}
        />
    );
    it('renders sign in page without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('rendered `SignInForm` component receive four props', () => {
        const signupFormDisplay = component.find('SignInForm');
        expect(Object.keys(signupFormDisplay.props()).length).toBe(4);
    });
});
