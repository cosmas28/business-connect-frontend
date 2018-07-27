import { filterCategories, filterLocations } from '../../src/helpers/filterMethods';

describe('tests for filter methods', () => {
    it('filter categories', () => {
        const mockBusinesses = [
            {
                category: 'education',
                id: 1,
                name: 'andela'
            },
            {
                category: 'education',
                id: 2,
                name: 'uon'
            },
            {
                category: 'tech',
                id: 3,
                name: 'facebook'
            }
        ];

        const expectedCatgories = [
            'education',
            'tech'
        ];

        expect(filterCategories(mockBusinesses)).toEqual(expectedCatgories);
    });

    it('filter locations', () => {
        const mockBusinesses = [
            {
                id: 1,
                location: 'nairobi',
                name: 'andela'
            },
            {
                id: 2,
                location: 'kabul',
                name: 'andela'
            },
            {
                id: 3,
                location: 'nairobi',
                name: 'andela'
            }
        ];

        const expectedCatgories = [
            'nairobi',
            'kabul'
        ];

        expect(filterLocations(mockBusinesses)).toEqual(expectedCatgories);
    });
});
