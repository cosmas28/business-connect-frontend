import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddBusinessForm from '../../src/components/Dashboard/AddBusinessForm';

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
        expect(component().find('input')).toHaveLength(2);
        expect(component().find('button')).toHaveLength(1);
    });

    it('should call `handleInputChange` when input field is changed', () => {
        component().find('input.test')
        .simulate('change');
        expect(props.handleInputChange).toBeCalled();
    });

    it('should call `addBusinessHandler` when submit button is clicked', () => {
        component().find('form')
        .simulate('submit');
        expect(props.addBusinessHandler).toBeCalled();
    });
});
