import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { MyBusinesses } from '../../src/components/Dashboard/MyBusinesses';

describe('tests for Dashboard component', () => {
    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully created an account!',
            status_ode: 201
        };
        const mockBusiness = [];

        const mockDeleteBusiness = jest.fn();
        const mockDeleteMessage = jest.fn();
        const mockFetchBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><MyBusinesses
                match={{
                    isExact: true,
                    params: { userId: 1 },
                    path: '',
                    url: ''
                }}
                message={mockMessage}
                businesses={mockBusiness}
                deleteBusiness={mockDeleteBusiness}
                deleteMessage={mockDeleteMessage}
                fetchBusinesses={mockFetchBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
