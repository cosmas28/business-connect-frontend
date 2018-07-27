import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { BusinessByLocation } from '../../src/components/Dashboard/BusinessByLocation';

describe('tests for BusinessCategory component', () => {
    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully deleted a business!',
            status_ode: 200
        };
        const mockLocation = [];
        const mockBusinesses = [];
        const mockDeleteBusiness = jest.fn();
        const mockDeleteMessage = jest.fn();
        const mockFetchBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><BusinessByLocation
                businessLocation={mockLocation}
                businesses={mockBusinesses}
                message={mockMessage}
                match={{
                    isExact: true,
                    params: { location: 'nairobi' },
                    path: '',
                    url: ''
                }}
                deleteBusiness={mockDeleteBusiness}
                deleteMessage={mockDeleteMessage}
                fetchBusinesses={mockFetchBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
