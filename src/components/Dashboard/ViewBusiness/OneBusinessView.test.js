import React from 'react';

import DetailBusinessView from './DetailBusinessView';

describe('One business view test suite', () => {
    let mountedBusinessView = null,
        props = null;
    const component = () => {
        if (!mountedBusinessView) {
            mountedBusinessView = mount(
                <DetailBusinessView {...props} />
            );
        }

        return mountedBusinessView;
    };

    beforeEach(() => {
        props = {
            'businessCategory': null,
            'businessLocation': null,
            'businessName': null,
            'businessOwner': null,
            'businessSummary': null,
            'errorMessage': null
        };
        mountedBusinessView = null;
    });

    describe('when `errorMessage` is null', () => {
        beforeEach(() => {
            props.businessCategory = 'Something';
            props.businessLocation = 'Something';
            props.businessName = 'Something';
            props.businessOwner = 'Something';
            props.businessSummary = 'Something';
            props.errorMessage = null;
        });

        it('renders without crashing', () => {
            expect(component()).toHaveLength(1);
        });

        it('renders a `businessName`', () => {
            const alertDiv = component().find('h3');
            expect(alertDiv.length).toBe(1);
        });

        it('renders a `businessOwner`', () => {
            const alertDiv = component().find('h4');
            expect(alertDiv.length).toBe(1);
        });

        it('renders a `businessSummary`', () => {
            const alertDiv = component().find('p.business-summary');
            expect(alertDiv.length).toBe(1);
        });

        it('renders a `businessLocation`', () => {
            const alertDiv = component().find('i.business-location');
            expect(alertDiv.length).toBe(1);
        });

        it('renders a `businessCategory`', () => {
            const alertDiv = component().find('strong.business-category');
            expect(alertDiv.length).toBe(1);
        });
    });

    describe('when `errorMessage` is not null', () => {
        beforeEach(() => {
            props.businessCategory = null;
            props.businessLocation = null;
            props.businessName = null;
            props.businessOwner = null;
            props.businessSummary = null;
            props.errorMessage = 'Something';
        });

        it('renders without crashing', () => {
            expect(component()).toHaveLength(1);
        });

        it('renders a null `businessName`', () => {
            const alertDiv = component().find('h3.business-name');
            expect(alertDiv.length).toBe(0);
        });

        it('renders a null `businessOwner`', () => {
            const alertDiv = component().find('h4');
            expect(alertDiv.length).toBe(0);
        });

        it('renders a null `businessSummary`', () => {
            const alertDiv = component().find('p.business-summary');
            expect(alertDiv.length).toBe(0);
        });

        it('renders a null `businessLocation`', () => {
            const alertDiv = component().find('i.business-location');
            expect(alertDiv.length).toBe(0);
        });

        it('renders a null `businessCategory`', () => {
            const alertDiv = component().find('strong.business-category');
            expect(alertDiv.length).toBe(0);
        });
        it('renders a `errorMessage`', () => {
            const alertDiv = component().find('h3.error');
            expect(alertDiv.length).toBe(1);
        });
    });
});
