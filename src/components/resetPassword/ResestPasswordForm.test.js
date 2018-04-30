import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import { MemoryRouter } from 'react-router-dom';

describe('Reset password form test suite', () => {
    let mountedResetPasswordForm = null,
        props = null;
    const mockHandleSubmitForm = jest.fn(),
        mockInputChange = jest.fn();
    const component = () => {
        if (!mountedResetPasswordForm) {
            mountedResetPasswordForm = mount(
                <MemoryRouter><ResetPasswordForm {...props} /></MemoryRouter>
            );
        }

        return mountedResetPasswordForm;
    };

    beforeEach(() => {
        props = {
            'ResetPasswordPutErrorMessage': null,
            'ResetPasswordSuccessMessage': null,
            'handleResetPasswordInputChange': mockHandleSubmitForm,
            'handleResetPasswordSubmitForm': mockInputChange
        };
        mountedResetPasswordForm = null;
    });

    it('renders `ResetPasswordForm` without crashing', () => {
        expect(component()).toHaveLength(1);
    });

    it('contains the reset password form', () => {
        expect(component().find('input')).toHaveLength(3);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleResetPasswordInputChange` when input field is changed', () => {
        component().find('input.test').simulate('change');
        expect(props.handleResetPasswordInputChange).toBeCalled();
    });

    it('should call `handleResetPasswordSubmitForm` when form is submitted', () => {
        component().find('form').simulate('submit');
        expect(props.handleResetPasswordSubmitForm).toBeCalled();
    });

    describe('when `ResetPasswordSuccessMessage` is passed', () => {
        beforeEach(() => {
            props.ResetPasswordSuccessMessage = 'Password reset successfully!';
        });

        it('renders a `Success Alert box`', () => {
            const alertDiv = component().find('div.alert-success');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `ResetPasswordPutErrorMessage` is passed', () => {
        beforeEach(() => {
            props.ResetPasswordPutErrorMessage = 'Email not registered';
        });

        it('renders a `Error Alert box`', () => {
            const alertDiv = component().find('div.alert-danger');
            expect(alertDiv.length).toBe(1);
        });
    });
});