import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddBusinessForm from './AddBusinessForm';

describe('Add business form test specs', () => {
    let mountedAddBusinessForm = null,
        props = null;
    const component = () => {
        if (!mountedAddBusinessForm) {
            mountedAddBusinessForm = mount(
                <MemoryRouter><AddBusinessForm {...props} /></MemoryRouter>
            );
        }

        return mountedAddBusinessForm;
    },
        mockAddBusinessHandler = jest.fn(),
        mockInputChange = jest.fn();

    beforeEach(() => {
        props = {
            'addBusinessHandler': mockAddBusinessHandler,
            'errorMessage': null,
            'handleInputChange': mockInputChange,
            'successMessage': null
        };
        mountedAddBusinessForm = null;
    });

    it('renders without crashing', () => {
        expect(component()).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component().find('input')).toHaveLength(3);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleInputChange` when input field is changed', () => {
        component().find('input.test').simulate('change');
        expect(props.handleInputChange).toBeCalled();
    });

    it('should call `addBusinessHandler` when submit button is clicked', () => {
        component().find('form').simulate('submit');
        expect(props.addBusinessHandler).toBeCalled();
    });

    describe('when `successMessage` is passed', () => {
        beforeEach(() => {
            props.successMessage = 'You have successfully registered a business!';
        });

        it('renders a `Success Alert box`', () => {
            const alertDiv = component().find('div.alert-success');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `errorMessage` is passed', () => {
        beforeEach(() => {
            props.errorMessage = 'Business already registered. Register a new business';
        });

        it('renders a `Error Alert box`', () => {
            const alertDiv = component().find('div.alert-danger');
            expect(alertDiv.length).toBe(1);
        });
    });
});
