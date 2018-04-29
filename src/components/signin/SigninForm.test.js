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

});
