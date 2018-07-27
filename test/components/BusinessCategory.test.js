import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { BusinessCategory } from '../../src/components/Dashboard/BusinessCategory';

describe('tests for BusinessCategory component', () => {
    it('Render without crashing', () => {
        const mockMessage = {
            message: 'You have successfully deleted a business!',
            status_ode: 200
        };
        const mockCategory = [];
        const mockBusinesses = [];
        const mockDeleteBusiness = jest.fn();
        const mockDeleteMessage = jest.fn();
        const mockFetchBusiness = jest.fn();
        const tree = renderer.create(
            <MemoryRouter><BusinessCategory
                businessCategory={mockCategory}
                businesses={mockBusinesses}
                message={mockMessage}
                match={{
                    isExact: true,
                    params: { category: 'education' },
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
