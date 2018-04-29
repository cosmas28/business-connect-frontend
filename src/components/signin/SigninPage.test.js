import React from 'react';
import SignInPage from './SigninPage';

describe('Sign in form test', () => {
    let mountedSignInForm = null,
       props = null;
    const mockHandleSubmitForm = jest.fn(),
        mockInputChange = jest.fn();
    const component = () => {
        if (!mountedSignInForm) {
            mountedSignInForm = mount(
                <SignInPage {...props} />
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

    it('contains the form', () => {
        expect(component().find('input')).toHaveLength(2);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleLoginInputChange` when input field is changed', () => {
        component().find('input.test').simulate('change');
        expect(props.handleLoginInputChange).toBeCalled();
    });

    it('should call `handleLoginSubmitForm` when submit button is called', () => {
        component().find('form').simulate('submit');
        expect(props.handleLoginSubmitForm).toBeCalled();
    });

    describe('when `loginSuccessMessage` is passed', () => {
        beforeEach(() => {
            props.loginSuccessMessage = 'You logged in successfully!';
        });

        it('renders a `Success Alert box`', () => {
            const alertDiv = component().find('div.alert-success');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `loginPutErrorMessage` is passed', () => {
        beforeEach(() => {
            props.loginPutErrorMessage = 'Invalid email or password!';
        });

        it('renders a `Error Alert box`', () => {
            const alertDiv = component().find('div.alert-danger');
            expect(alertDiv.length).toBe(1);
        });
    });

});
