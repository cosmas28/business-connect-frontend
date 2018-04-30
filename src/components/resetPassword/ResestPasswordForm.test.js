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
});