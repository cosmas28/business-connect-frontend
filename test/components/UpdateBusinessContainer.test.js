import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { UpdateBusiness } from '../../src/components/Dashboard/UpdateBusinessContainer';

describe(' UpdateBusinessContainer component', () => {

    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully created an account!',
            status_ode: 201
        };
        const mockBusiness = {
            category: 'Education',
            location: 'Kigali',
            name: 'AndelaHub',
            summary: 'we believe in innovation'
        };

        const mockUpdateBusiness = jest.fn();
        const mockDeleteMessage = jest.fn();
        const mockFetchBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><UpdateBusiness
                message={mockMessage}
                business={mockBusiness}
                match={{
                    isExact: true,
                    params: { businessId: 1 },
                    path: '',
                    url: ''
                }}
                updateBusiness={mockUpdateBusiness}
                deleteMessage={mockDeleteMessage}
                fetchBusinessesById={mockFetchBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
