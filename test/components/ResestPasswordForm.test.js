import React from 'react';
import ResetPasswordForm from '../../src/components/resetPassword/ResetPasswordForm';
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

    it('should call `handleResetPasswordInputChange` when input field is changed', () => {
        component().find('input.test')
        .simulate('change');
        expect(props.handleResetPasswordInputChange).toBeCalled();
    });

    it('should call `handleResetPasswordSubmitForm` when form is submitted', () => {
        component().find('form')
        .simulate('submit');
        expect(props.handleResetPasswordSubmitForm).toBeCalled();
    });
});
