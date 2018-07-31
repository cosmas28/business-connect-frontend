import { filterCategories } from '../../src/helpers/filterMethods';

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
});
