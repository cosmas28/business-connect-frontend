import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import OneBusinessView from './OneBusinessView';

describe('One business tests', () => {
    let mountedOneBusinessView = null;
    let props = null;

    const component = () => {
        if (!mountedOneBusinessView) {
            mountedOneBusinessView = mount(
                <MemoryRouter><OneBusinessView {...props} /></MemoryRouter>
            );
        }

        return mountedOneBusinessView;
    };

    beforeEach(() => {
        props = {
            'category': 'tech',
            'id': 1,
            'location': 'Nairobi',
            'name': 'Facebook',
            'summary': 'Cool stuf with wonderful UI'
        };
    });

    it('renders without crashing', () => {
        expect(component()).toHaveLength(1);
    });

});
