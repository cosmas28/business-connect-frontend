import React from 'react';
import SignInForm from './SigninForm';

describe('Sign in form test', () => {
    let mountedSignInForm = null,
       props = null;
    const mockHandleSubmitForm = jest.fn(),
        mockInputChange = jest.fn();
    const component = () => {
        if (!mountedSignInForm) {
            mountedSignInForm = mount(
                <SignInForm {...props} />
            );
        }

        return mountedSignInForm;
    };

    beforeEach(() => {
        props = {
            'handleLoginInputChange': mockHandleSubmitForm,
            'handleLoginSubmitForm': mockInputChange,
            'loginPutErrorMessage': null,
            'loginSuccessMessage': null
        };
        mountedSignInForm = null;
    });

    it('renders and matches our snapshot', () => {
        expect(component()).toMatchSnapshot();
    });
});
