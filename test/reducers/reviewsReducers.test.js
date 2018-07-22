import { reviewsReducer } from '../../src/reducers/reviewsReducers';
import * as types from '../../src/actions/actionTypes';

describe('reviews reducers', () => {
    it('should return the initial state', () => {
        expect(reviewsReducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_REVIEWS_SUCCESS action', () => {
        expect(reviewsReducer({}, {
            review: {
                created_by: 'cosmas',
                id: 1,
                review: 'Business is well scaleable'
            },
            type: types.ADD_REVIEWS_SUCCESS
        })).toEqual([
            {
                created_by: 'cosmas',
                id: 1,
                review: 'Business is well scaleable'
            }
        ]);
    });
});
