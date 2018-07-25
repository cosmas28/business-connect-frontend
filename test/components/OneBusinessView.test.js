import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import OneBusinessView from '../../src/components/Dashboard/ViewBusiness/OneBusinessView';

describe('one business tests', () => {
    it('renders correctly when there are no items', () => {
        const props = {
            'authUser': '5',
            'category': 'tech',
            'id': 1,
            'location': 'Nairobi',
            'name': 'Facebook',
            'onDelete': jest.fn(),
            'ownerId': 5,
            'summary': 'Cool stuf with wonderful UI'
        };

        const tree = renderer.create(<MemoryRouter><OneBusinessView {...props}/></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
