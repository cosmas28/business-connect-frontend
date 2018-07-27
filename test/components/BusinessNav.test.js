import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import BusinessNav from '../../src/components/common/BusinessNav';

describe('tests for BusinessNav', () => {
    it('Render without crashing', () => {
        const mockBusiness = [];

        const tree = renderer.create(
            <MemoryRouter><BusinessNav
                businessList={mockBusiness}
            /></MemoryRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
