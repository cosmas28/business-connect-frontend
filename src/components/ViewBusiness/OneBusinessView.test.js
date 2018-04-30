import React from 'react';

import OneBusinessView from './OneBusinessView';

describe('One business view test suite', () => {
    const component = mount(<OneBusinessView
        businessCategory="Category A"
        businessLocation="Location A"
        businessName="Business A"
        businessOwner="Business Name"
        businessSummary="Some long text description" />);

    it('renders without crashing', () => {
        expect(component).toHaveLength(1);
    });

    it('renders a `businessName`', () => {
        const alertDiv = component.find('h3');
        expect(alertDiv.length).toBe(1);
    });

    it('renders a `businessOwner`', () => {
        const alertDiv = component.find('h4');
        expect(alertDiv.length).toBe(1);
    });

    it('renders a `businessSummary`', () => {
        const alertDiv = component.find('p.business-summary');
        expect(alertDiv.length).toBe(1);
    });

    it('renders a `businessLocation`', () => {
        const alertDiv = component.find('i.business-location');
        expect(alertDiv.length).toBe(1);
    });

    it('renders a `businessCategory`', () => {
        const alertDiv = component.find('strong.business-category');
        expect(alertDiv.length).toBe(1);
    });
});
